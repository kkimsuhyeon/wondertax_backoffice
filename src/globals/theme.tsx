import React from 'react';
import { ThemeProvider } from 'styled-components';

export const palette = {
  white: '#ffffff',
  whiteGray: '#eeeeee',
  whiteLemon: '#fbfdba',
  lemon: '#fff600',
  yellow: '#ffe600',
  blackGray: '#393e46',
  subBlack: '#222831',
  black: '#000000',
};

function StyledThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={palette}>{children}</ThemeProvider>;
}

export type Palette = typeof palette;

export { StyledThemeProvider as ThemeProvider };
