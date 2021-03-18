import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { StyleAttributes, PropTypes as ButtonPropTypes } from '.';

const Button = ({ customStyle = defaultStyle, children, onClick, status }: PropsWithChildren<ButtonPropTypes>) => {
  return (
    <StyledButton height={customStyle?.height} width={customStyle?.width} onClick={onClick} status={status}>
      {children}
    </StyledButton>
  );
};

const defaultStyle: StyleAttributes = {
  height: 'auto',
  width: 'auto',
};

const StyledButton = styled.button.attrs<{ status: boolean }>(({ status }) => ({ disabled: status }))<StyleAttributes>`
  display: flex;
  ${({ height }) => height ?? `height: ${height}`};
  ${({ width }) => width ?? `width: ${width}`};
  ${({ margin }) => margin ?? `margin: ${margin}`};
  ${({ padding }) => padding ?? `padding: ${padding}`};
`;

export default Button;
