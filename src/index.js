import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';
import { atndTheme } from 'styles/antdTheme';

ConfigProvider.config({
  theme: atndTheme,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
