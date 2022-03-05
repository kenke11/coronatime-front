import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import 'index.css';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import './i18next';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
