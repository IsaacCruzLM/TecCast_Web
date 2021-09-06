import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from './context/ThemeContext/themeProvider';
import Routes from './Routes';

const App: React.FC = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
