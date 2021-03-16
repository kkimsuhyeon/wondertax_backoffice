import React from 'react';
import { CSSProperties } from 'styled-components';

export interface DivStyleAttributes {
  height?: string;
  width?: string;
}

export interface FlexStyleAttributes extends DivStyleAttributes {
  flex?: CSSProperties['flex'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
}

export interface TextStyleAttributes extends DivStyleAttributes {
  align?: CSSProperties['textAlign'];
}

export interface PropTypes {
  customStyle?: FlexStyleAttributes & DivStyleAttributes & TextStyleAttributes;
  children?: React.ReactNode;
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLDivElement>) => void);
}
