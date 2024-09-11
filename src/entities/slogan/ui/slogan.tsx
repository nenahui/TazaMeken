import { Flex, Typography } from 'antd';

const { Text } = Typography;

const Slogan = () => {
  return (
    <Flex className='max-w-[1000px]'>
      <Text className='text-primary-color text-9xl font-medium'>Мы создаём чистое будущее</Text>
    </Flex>
  );
};

export default Slogan;
