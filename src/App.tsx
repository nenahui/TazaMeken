import { ConfigProvider } from 'antd';
import React from 'react';
import { Routes } from './app/routes/routes';

export const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#13c2c2',
        },
      }}
    >
      <Routes />
    </ConfigProvider>
  );
};
