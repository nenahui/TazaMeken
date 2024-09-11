import { Navigation } from '@/entities/navigation';
import { Logo } from '@/shared/ui/logo';
import { Button, Flex } from 'antd';
import React from 'react';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={'container mx-auto mt-4'}>
      <Flex justify={'space-between'} align={'center'} className={styles.header}>
        <Logo />
        <Navigation />
        <Button type={'primary'} shape={'round'} size={'large'}>
          Связаться
        </Button>
      </Flex>
    </div>
  );
};
