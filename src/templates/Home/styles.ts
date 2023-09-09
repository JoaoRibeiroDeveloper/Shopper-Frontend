import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
  margin-top: 0rem;
`;
export const Form = styled.form`
  width: 100%;
`;

export const ContainerButton = styled.div`
  max-width: 50rem;
  width: 100%;
`;

export const ContainerTable = styled.div`
  ${({ theme }) => css`
    margin: 3rem 0rem;
    overflow: auto;
    max-width: 100%;
    background-color: ${theme.colors.white};
  `}
`;

export const ContainerTitle = styled.div`
  margin: 2.5rem 0rem;
`;
