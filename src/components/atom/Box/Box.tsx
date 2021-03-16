import React from 'react';
import styled from 'styled-components';

import { DivStyleAttributes, FlexStyleAttributes, TextStyleAttributes, PropTypes } from '.';

export const Div = ({ children, customStyle, onClick }: PropTypes) => {
  return (
    <StyledDiv width={customStyle?.width} height={customStyle?.height}>
      {children}
    </StyledDiv>
  );
};

export const Flex = ({ children, customStyle, onClick }: PropTypes) => {
  return (
    <StyledFlex
      width={customStyle?.width}
      height={customStyle?.height}
      align={customStyle?.align}
      flex={customStyle?.flex}
      justify={customStyle?.justify}
    >
      {children}
    </StyledFlex>
  );
};

export const Text = ({ children, customStyle, onClick }: PropTypes) => {
  return <StyledText>{children}</StyledText>;
};

const StyledDiv = styled.div<DivStyleAttributes>`
  ${({ height }) => height ?? `height: ${height}`};
  ${({ width }) => width ?? `width: ${width}`};
`;

const StyledFlex = styled.div<FlexStyleAttributes>`
  ${({ height }) => height ?? `height: ${height}`};
  ${({ width }) => width ?? `width: ${width}`};
  ${({ align }) => align ?? `align-items: ${align}`};
  ${({ flex }) => flex ?? `flex: ${flex}`};
  ${({ justify }) => justify ?? `justify-content: ${justify}`};
`;

const StyledText = styled.div<TextStyleAttributes>`
  ${({ height }) => height ?? `height: ${height}`};
  ${({ width }) => width ?? `width: ${width}`};
  ${({ align }) => align ?? `text-align: ${align}`};
`;
