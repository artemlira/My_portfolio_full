import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './styles/index.scss';
import ScrollToTop from './components/ScrollToTop';
import Context from './components/Context';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div className="loading">Loading...</div>}>
    <BrowserRouter>
      <Context>
        <Provider store={store}>
          <ScrollToTop />
          <App />
        </Provider>
      </Context>
    </BrowserRouter>
  </Suspense>,
);
