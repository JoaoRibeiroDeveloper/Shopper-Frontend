import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    max-width: 500px;
    height: 10rem;
    border: 0.2rem dotted #ccc;
    font-weight: 500;
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
    border-radius: 1rem;
    padding: 1.2rem;
    outline: none;
    background-color: ${theme.colors.strongGray};
  `}
  &:focus {
    box-shadow: 0 0 0 0.3rem rgb(0 123 255 / 25%);
  }
`;
