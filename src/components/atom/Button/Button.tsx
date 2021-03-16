import React from 'react';
import styled from 'styled-components';

import { StyleAttributes, PropTypes } from '.';

export const Button = ({ children, customStyle = defaultStyle, onClick }: PropTypes) => {
  return (
    <StyledButton height={customStyle?.height} width={customStyle?.width} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const defaultStyle: StyleAttributes = {
  height: 'auto',
  width: 'auto',
};

const StyledButton = styled.button<StyleAttributes>`
  display: flex;
  ${({ height }) => height ?? `height: ${height}`};
  ${({ width }) => width ?? `width: ${width}`};
`;
