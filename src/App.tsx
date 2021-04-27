import React from 'react';

import ResetStyle from 'globals/ResetStyle';
import { ThemeProvider } from 'globals/theme';

import Root from 'pages/Root';

export default function App() {
  return (
    <ThemeProvider>
      <ResetStyle />
      <Root />
    </ThemeProvider>
  );
}
