import React from 'react';

import ResetStyle from 'globals/ResetStyle';
import { ThemeProvider } from 'globals/theme';

// import { Button } from 'components/atom/Button';

import Root from './pages/Root';

function App() {
  return (
    <ThemeProvider>
      <ResetStyle />
      <Root />
      {/* <Button>test</Button> */}
    </ThemeProvider>
  );
}

export default App;
