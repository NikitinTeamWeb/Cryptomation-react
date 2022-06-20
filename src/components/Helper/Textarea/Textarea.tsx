import { FC, ReactNode } from 'react';
import styles from './textarea.module.scss';

import LightsIcon from '../../../assets/images/Powered/Lights.svg';

interface IProps {
  children: ReactNode;
}

const Textarea: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.block}>
      <div className={styles.top}>
        <LightsIcon />
      </div>
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default Textarea;
