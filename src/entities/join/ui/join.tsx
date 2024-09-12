import { Button, Flex, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import styles from './join.module.scss';
const { Text } = Typography;

const Join = () => {
  return (
    <Flex className={styles.join}>
      <Flex className='mt-[90px]' gap={30} vertical justify='center'>
        <Flex className='container' vertical>
          <Text className='text-xl my-6'>Введение</Text>
          <Text className='font-medium text-5xl'>Видение экологичной, устойчивой и доступной жизни.</Text>
        </Flex> 
        <NavLink to={'/'}>
          <Button type={'primary'} shape={'round'} className='w-56 h-16 text-xl'>
            Присоединится
          </Button>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default Join;
