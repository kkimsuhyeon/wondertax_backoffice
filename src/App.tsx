import React  from 'react';

import ResetStyle from 'globals/ResetStyle';
import { ThemeProvider } from 'globals/theme';
import Routes from "./routes";

// from https://codesandbox.io/s/github/albertcito/templates-react/tree/master
export default function App() {
  return (
    <ThemeProvider>
      <ResetStyle />
      <Routes />
      {/* <Button>test</Button> */}
    </ThemeProvider>
  );
}
