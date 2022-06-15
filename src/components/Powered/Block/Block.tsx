import { ReactNode, FC } from 'react';
import Link from 'next/link';
import styles from './block.module.scss';

import Textarea from '../Textarea/Textarea';
import LinkBlue from '../../../assets/images/link_blue.png';

interface IProps {
  title: string;
  text: string;
  link: string;
}

const Block: FC<IProps> = ({ title, text, link }) => {
  return (
    <>
      <Textarea />
      <h3 className={styles.title}>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: text }} className={styles.text}></p>
      <Link href={link}>
        <a className={styles.documentation}>
          <span className={styles.icon}>
            <img src={LinkBlue.src} alt="" />
          </span>
          Documentation
        </a>
      </Link>
    </>
  );
};
export default Block;
