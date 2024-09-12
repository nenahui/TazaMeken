import { Join } from '@/entities/join';
import { Slogan } from '@/entities/slogan';
import { Sponsors } from '@/entities/sponsors';
import { Flex } from 'antd';
import styles from './mainInfo.module.scss'

const MainInfo = () => {
  return (
    <Flex gap={50} className={styles.mainInfo}>
      <Flex gap={150} vertical>
        <Sponsors />
        <Join />
      </Flex>
        <Slogan />
    </Flex>
  );
};

export default MainInfo;
