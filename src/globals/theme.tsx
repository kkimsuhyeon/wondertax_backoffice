import React from 'react';
import { ThemeProvider } from 'styled-components';

export const palette = {
  lemon: '#f8e88e',
  black: '#000000',
  white: '#ffffff',
  whiteGray: '#fafafa',
  blackGray: '#555',
};

function StyledThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={palette}>{children}</ThemeProvider>;
}

export type Palette = typeof palette;

export { StyledThemeProvider as ThemeProvider };
