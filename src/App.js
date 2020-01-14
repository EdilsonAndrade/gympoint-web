import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import Routes from './routes';
import GlobalStyles from './styles/global';
import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
        </Router>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
}

export default App;
