import { ConfigProvider } from 'antd';
import React from 'react';
import { config } from './config/config';
import { Routes } from './routes/routes';

export const App: React.FC = () => {
  return (
    <ConfigProvider theme={config.theme}>
      <Routes />
    </ConfigProvider>
  );
};
