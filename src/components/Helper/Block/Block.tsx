import { ReactNode, FC } from 'react';

import Textarea from './Textarea/Textarea';

import styles from './block.module.scss';
import LinkYellow from '../../../assets/images/link_yellow.png';

interface IProps {
  title: string;
  text: string;
}

const Block: FC<IProps> = ({ title, text }) => {
  return (
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.textarea}>
        <Textarea />
      </div>
      <p className={styles.text}>{text}</p>
      <div className={styles.documentation}>
        <span className={styles.icon}>
          <img src={LinkYellow.src} alt="" />
        </span>
        Documentation
      </div>
    </div>
  );
};

export default Block;
