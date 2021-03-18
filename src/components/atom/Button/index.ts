import React from 'react';
import { CSSProperties } from 'styled-components';

export { default } from './Button';
export interface StyleAttributes {
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
  status?: boolean;
}

export interface PropTypes {
  customStyle?: StyleAttributes;
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  status?: boolean;
}
