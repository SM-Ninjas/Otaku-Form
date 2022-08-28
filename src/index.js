import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ThemeProvider from './context/ThemeContext';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <ThemeProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

