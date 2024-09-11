import { Logo } from '@/shared/ui/logo';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className={'container mx-auto'}>
      <Logo />
    </div>
  );
};
