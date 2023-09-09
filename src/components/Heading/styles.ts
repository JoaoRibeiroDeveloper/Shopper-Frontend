import styled, { css } from 'styled-components';

import { ITheme } from '../../styles/ITheme';
import { HeadingProps } from '.';

const titleSize = {
  small: (theme: ITheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: ITheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme: ITheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: ITheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme: ITheme) => css`
  @media (${theme.media.lteMedium}) {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

export const Title = styled.h1<HeadingProps>`
  ${({ theme, size }) => css`
    line-height: 4rem;
    color: ${theme.colors.mediumDark};
    ${titleSize[size || 'huge'](theme as ITheme)}
  `}
`;
