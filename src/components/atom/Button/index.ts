import React from 'react';

export interface StyleAttributes {
  height?: string;
  width?: string;
}

export interface PropTypes {
  customStyle?: StyleAttributes;
  children?: React.ReactNode;
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
}
