import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { Heading } from '../../components/Heading';
import InputFile from '../../components/InputFile';
import Table from '../../components/Table';
import { ProductsRoutesEnum } from '../../config/api';
import { api } from '../../services/api';
import { theme } from '../../styles/theme';
import { columnsTable, IProducts } from './columnsTable';
import * as Styled from './styles';

const Home = () => {
  const [hasError, setHasError] = useState(true);
  const [products, setproducts] = useState<IProducts[]>([]);
  const [loadingValidateCSV, setloadingValidateCSV] = useState(false);
  const [loadingUpdatePriceCSV, setloadingUpdatePriceCSV] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChangeInputFile = () => {
    setHasError(true);
    setproducts([]);
  };

  const handleGetFormDataFIle = () => {
    const file = inputFileRef?.current?.files;
    if (!file?.length) {
      toast.warn('Arquivo é obrigatório');
      return;
    }
    const formData = new FormData();
    formData.append('file', file[0]);
    return formData;
  };

  const handleValidateCSV = async () => {
    const formData = handleGetFormDataFIle();
    if (!formData) return;
    setloadingValidateCSV(true);
    api
      .post(ProductsRoutesEnum.VALIDATE_CSV, formData)
      .then(data => {
        setproducts(data.data.productsResponse);
        setHasError(data.data.hasError);
      })
      .catch(e => {
        if (e?.response?.data?.status === 'warning') {
          toast.warn(e.response.data.message);
          return;
        } else if (e?.response?.data?.status === 'error') {
          toast.error(e.response.data.message);
          return;
        }
        toast.error('Um erro desconhecido ocorreu');
      })
      .finally(() => setloadingValidateCSV(false));
  };

  const handleUpdatePriceCSV = async () => {
    const formData = handleGetFormDataFIle();
    if (!formData) return;
    setloadingUpdatePriceCSV(true);
    api
      .patch(ProductsRoutesEnum.UPDATE_PRICE_CSV, formData)
      .then(() => {
        setHasError(true);
        setproducts([]);
        if (inputFileRef.current) {
          inputFileRef.current.value = '';
        }
        toast.success('Preço atualizado com sucesso');
      })
      .catch(e => {
        if (e?.response?.data?.status === 'warning') {
          toast.warn(e.response.data.message);
          return;
        } else if (e?.response?.data?.status === 'error') {
          toast.error(e.response.data.message);
          return;
        }
        toast.error('Um erro desconhecido ocorreu');
      })
      .finally(() => setloadingUpdatePriceCSV(false));
  };

  return (
    <>
      <Header />
      <Styled.Form>
        <Styled.Container>
          <Styled.ContainerTitle>
            <Heading size="medium">Atualizar Preço dos Produtos</Heading>
          </Styled.ContainerTitle>
          <InputFile
            accept="text/csv"
            ref={inputFileRef}
            onChange={handleChangeInputFile}
          />
          <Styled.ContainerButton>
            <Button
              size="large"
              type="primary"
              disabled={!hasError}
              loading={loadingValidateCSV}
              onClick={handleValidateCSV}
              style={{
                background: theme.colors.primaryColor,
                margin: '3rem 0 1.5rem',
              }}
            >
              Validar Arquivo
            </Button>
          </Styled.ContainerButton>
          <Styled.ContainerButton>
            <Button
              size="large"
              type="primary"
              disabled={hasError}
              loading={loadingUpdatePriceCSV}
              onClick={handleUpdatePriceCSV}
              style={{
                background: theme.colors.secondaryColor,
              }}
            >
              Salvar Preço
            </Button>
          </Styled.ContainerButton>
          {!!products.length && (
            <>
              <Styled.ContainerTitle>
                <Heading size="medium">Detalhes dos Produtos</Heading>
              </Styled.ContainerTitle>
              <Styled.ContainerTable>
                <Table
                  rowKey={record => record.row}
                  columns={columnsTable}
                  dataSource={products}
                  style={{ width: '100vw' }}
                />
              </Styled.ContainerTable>
            </>
          )}
        </Styled.Container>
      </Styled.Form>
    </>
  );
};

export default Home;
