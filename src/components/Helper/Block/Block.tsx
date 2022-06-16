import { ReactNode, FC } from 'react';
import Link from 'next/link';
import Textarea from '../Textarea/Textarea';

import styles from './block.module.scss';
import LinkYellow from '../../../assets/images/link_yellow.svg';

interface IProps {
  title: string;
  text: string;
  link: string;
}

const Block: FC<IProps> = ({ title, text, link }) => {
  return (
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.textarea}>
        <Textarea />
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={link}>
        <a className={styles.documentation}>
          <span className={styles.icon}>
            <LinkYellow />
          </span>
          Documentation
        </a>
      </Link>
    </div>
  );
};

export default Block;
