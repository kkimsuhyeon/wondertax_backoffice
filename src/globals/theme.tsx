import React from 'react';
import { ThemeProvider } from 'styled-components';

export const palette = {
  lemon: '#fffacd',
  black: '#000000',
  white: '#ffffff',
};

function StyledThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={palette}>{children}</ThemeProvider>;
}

export type Palette = typeof palette;

export { StyledThemeProvider as ThemeProvider };