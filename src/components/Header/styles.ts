import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColor};
    width: 100%;
    height: 80px;
  `}
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0px auto;
  max-width: 150rem;
  height: 100%;
`;

export const Logo = styled.img`
  height: auto;
  width: 14rem;
`;
