import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';
import { atndTheme } from 'styles/antdTheme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ConfigProvider.config({
  theme: atndTheme,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
