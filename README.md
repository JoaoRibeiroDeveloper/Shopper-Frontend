## TESTE TÉCNICO: Shopper - Frontend React.js com Typescript

Seja muito bem-vindo ao meu teste técnico: **Atualização de Preço de Produtos com CSV**.

Eu sou o João e estarei contigo para apresentar o projeto **Frontend** com **React.js** e **Typescript**.

## Rodando a Aplicação no seu PC

### 1 - Clone o Projeto

Faça um clone deste repositório e instale no seu ambiente de desenvolvimento usando o seguinte comando no seu terminal (escolha um diretório apropriado):

```shell
git clone https://github.com/JoaoRibeiroDeveloper/Shopper-Frontend.git <NOME_PASTA>
```

### 2 - Instale o Node.js/NPM

Para instalar o Node.js entre em [https://nodejs.org/en](https://nodejs.org/en) faça o download conforme seu sistema operacional

### 3 - Ajustar Configuração

Em src/config/api.ts tem uma variável chamada REACT_APP_API_URL coloque o URL_BASE do projeto backend nela

```shell
export const REACT_APP_API_URL = 'http://localhost:3333'; #Coloque conforme a configuração feita no backend

export enum ProductsRoutesEnum {
  VALIDATE_CSV = '/products/validateCSV',
  UPDATE_PRICE_CSV = '/products/updatePriceCSV',
}

```

### 4 - Instale as dependências do projeto

```shell
npm install
#or
yarn
```

### 5 - Execute o projeto

```shell
npm run dev
#or
yarn run dev
```
