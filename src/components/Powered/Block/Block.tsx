import { ReactNode, FC } from 'react';

import styles from './block.module.scss';

import Textarea from './Textarea/Textarea';
import LinkBlue from '../../../assets/images/link_blue.png';

interface IProps {
  title: string;
  text: ReactNode;
}

const Block: FC<IProps> = ({ title, text }) => {
  return (
    <div className={styles.content}>
      <div className={styles.textarea}>
        <Textarea />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <div className={styles.documentation}>
        <span className={styles.icon}>
          <img src={LinkBlue.src} alt="" />
        </span>
        Documentation
      </div>
    </div>
  );
};
export default Block;
