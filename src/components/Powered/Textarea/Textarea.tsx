import { FC } from 'react';
import styles from './textarea.module.scss';
import cn from 'classnames';

import LightsIcon from '../../../assets/images/Powered/Lights.svg';

interface IProps {
  image?: any;
  imageText?: string;
}

const Textarea: FC<IProps> = ({ image, imageText }) => {
  return (
    <div className={cn(styles.block, { [styles.blockImage]: image })}>
      {!image && (
        <div className={styles.top}>
          <LightsIcon />
        </div>
      )}

      {imageText ? (
        <p className={styles.text}>{imageText}</p>
      ) : (
        <div className={styles.image}>{image}</div>
      )}
    </div>
  );
};

export default Textarea;
