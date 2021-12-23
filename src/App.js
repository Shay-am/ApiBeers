import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './Theme';
import { Switch as Routes } from './Routes/Routes';
// import { Login } from './Pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* <Login /> */}
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
