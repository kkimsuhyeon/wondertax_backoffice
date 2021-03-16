import React from 'react';
import { CSSProperties } from 'styled-components';

interface StyleAttributes {
  type: 'div' | 'flex' | 'text';
  height?: string;
  width?: string;
}

export interface DivStyleAttributes extends StyleAttributes {
  type: 'div';
}

export interface FlexStyleAttributes extends StyleAttributes {
  type: 'flex';
  flex?: CSSProperties['flex'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
}

export interface TextStyleAttributes extends StyleAttributes {
  type: 'text';
  align?: CSSProperties['textAlign'];
}

export type CustomStyle = DivStyleAttributes | FlexStyleAttributes | TextStyleAttributes;

export interface PropTypes {
  customStyle?: CustomStyle;
  children?: React.ReactNode;
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLDivElement>) => void);
}
