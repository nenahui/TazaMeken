import { Flex, Typography } from 'antd';

const { Text } = Typography;

const Slogan = () => {
  return (
    <Flex vertical className='max-w-[1000px] mx-auto ' justify='center'>
      <Text className='text-primary-color text-9xl font-medium mb-16'>Мы создаём чистое будущее</Text>
      <img src="src\shared\assets\images\mainSloganImg.svg" alt="" />
    </Flex>
  );
};

export default Slogan;
