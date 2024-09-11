import { Slogan } from '@/entities/slogan';
import { Header } from '@/widgets/header';

import React from 'react';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Slogan />
    </>
  );
};
