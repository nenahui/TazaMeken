import { Flex } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

const Sponsors = () => {
  return (
    <Flex className='container mx-20 size-96' gap={20} vertical>
      <Flex className='container mx-auto' vertical>
        <Text className='text-2xl'>Количество спонсоров</Text>
        <Text className='text-primary-color font-medium text-7xl'>40+</Text>
      </Flex>
      <Text className='text-2xl'>
        Создано с заботой об экологии, чтобы улучшить вашу жизнь уже сегодня и создать гармоничное, устойчивое будущее
        для вас и ваших близких.
      </Text>
    </Flex>
  );
};

export default Sponsors;
