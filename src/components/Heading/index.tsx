import React from 'react';

import * as Styled from './styles';

export interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'big' | 'huge';
}

export const Heading = ({
  children,
  as = 'h1',
  size = 'huge',
}: HeadingProps) => {
  return (
    <Styled.Title as={as} size={size}>
      {children}
    </Styled.Title>
  );
};
