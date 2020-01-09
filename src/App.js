import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import Routes from './routes/index';
import GlobalStyles from './styles/global';
import history from './services/history';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router history={history}>
        <Routes />
      </Router>
    </BrowserRouter>
  );
}

export default App;
