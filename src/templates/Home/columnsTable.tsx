import { ColumnsType } from 'antd/es/table';

export interface IProducts {
  row: number;
  code: number;
  name: string;
  currentPrice: number;
  newPrice: number;
  error: string[];
}

export const columnsTable: ColumnsType<IProducts> = [
  {
    title: 'Linha',
    dataIndex: 'row',
    key: 'row',
    sorter: (a, b) => (a.row === b.row ? 0 : a.row < b.row ? -1 : 1),
    render: text => <span>{text}</span>,
  },
  {
    title: 'Código',
    dataIndex: 'code',
    key: 'code',
    sorter: (a, b) => (a.code === b.code ? 0 : a.code < b.code ? -1 : 1),
    render: text => <span>{text}</span>,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: text => <span>{text}</span>,
  },
  {
    title: 'Preço Atual',
    dataIndex: 'currentPrice',
    key: 'currentPrice',
    sorter: (a, b) =>
      a.currentPrice === b.currentPrice
        ? 0
        : a.currentPrice < b.currentPrice
        ? -1
        : 1,
    render: text => (
      <span>
        {text.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>
    ),
  },
  {
    title: 'Novo Preço',
    dataIndex: 'newPrice',
    key: 'newPrice',
    sorter: (a, b) =>
      a.newPrice === b.newPrice ? 0 : a.newPrice < b.newPrice ? -1 : 1,
    render: text => (
      <span>
        {text.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>
    ),
  },
  {
    title: 'Erros',
    dataIndex: 'error',
    key: 'error',
    render: (_, products) => <span>{products.error.join(' - ')}</span>,
  },
];
