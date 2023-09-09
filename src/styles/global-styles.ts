import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
    background-color: ${({ theme }) => theme.colors.mediumGray};
  }
`;
