import { Button, ConfigProvider } from 'antd';
import React from 'react';

export const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#13c2c2',
        },
      }}
    >
      <Button type={'primary'}>Hello</Button>
    </ConfigProvider>
  );
};
