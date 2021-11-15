import React from 'react';

import ResetStyle from 'globals/ResetStyle';
import { ThemeProvider } from 'globals/theme';
import Spinner from 'globals/Spinner';
import Dialog from 'globals/Dialog';

import Root from 'pages/Root';

export default function App() {
  return (
    <ThemeProvider>
      <ResetStyle />
      <Spinner />
      <Dialog />
      <Root />
    </ThemeProvider>
  );
}
