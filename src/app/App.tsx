import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { ThemeGlobalProvider } from './styles/provider';

const App: React.FC = () => (
  <ThemeGlobalProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeGlobalProvider>
);

export default App;
