import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';
import history from './services/history';

function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </BrowserRouter>
  );
}

export default App;
