import { ConfigProvider } from 'antd';
import React from 'react';
import { config } from './app/config/config';
import { Routes } from './app/routes/routes';

export const App: React.FC = () => {
  return (
    <ConfigProvider theme={config.theme}>
      <Routes />
    </ConfigProvider>
  );
};
