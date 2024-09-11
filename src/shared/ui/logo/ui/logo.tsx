import { config } from '@/app/config/config';
import { Flex, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Link to={'/'}>
      <Flex align={'center'} gap={'middle'}>
        <img src={'src/shared/assets/images/TazaMeken.svg'} alt='TazaMeken' />
        <Typography.Text className={`text-[${config.primaryColor}] text-2xl`}>TazaMeken</Typography.Text>
      </Flex>
    </Link>
  );
};
