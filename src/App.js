import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'Theme';
import { Switch as Routes } from 'Routes/Routes';
import { AuthProvider } from 'Context/authProvider';
import { Nav } from 'Components';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Nav />
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
