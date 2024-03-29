import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import AuthMiddleware from './services/middleware/AuthMiddleware.tsx';
import App from './App.tsx';
import { store } from './redux/store.ts';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CookiesProvider>
          <AuthMiddleware>
            <App />
          </AuthMiddleware>
        </CookiesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
