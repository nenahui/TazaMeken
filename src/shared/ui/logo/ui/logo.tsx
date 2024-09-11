import { Flex, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <Link to={'/'}>
      <Flex align={'center'} gap={'middle'}>
        <img src={'src/shared/assets/images/TazaMeken.svg'} alt='TazaMeken' />
        <Typography.Text className={styles.logoTitle}>TazaMeken</Typography.Text>
      </Flex>
    </Link>
  );
};
