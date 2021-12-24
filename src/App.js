import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './Theme';
import { Switch as Routes } from './Routes/Routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
