import { FC, ReactNode } from 'react';
import styles from './textarea.module.scss';
import cn from 'classnames';

import LightsIcon from '../../../assets/images/Powered/Lights.svg';

interface IProps {
  image?: any;
  imageText?: boolean;
  children: ReactNode;
}

const Textarea: FC<IProps> = ({ image, imageText, children }) => {
  return (
    <div className={cn(styles.block, { [styles.blockImage]: image })}>
      {!image && (
        <div className={styles.top}>
          <LightsIcon />
        </div>
      )}

      {imageText ? (
        <p className={styles.text}>{children}</p>
      ) : (
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
      )}
    </div>
  );
};

export default Textarea;
