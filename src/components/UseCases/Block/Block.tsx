import { FC } from 'react';
import Link from 'next/link';

import styles from './block.module.scss';
import LinkYellow from '../../../assets/images/link_yellow.svg';

interface IProps {
  item: IProp;
}

interface IProp {
  icon: any;
  title: string;
  text: string;
  link: string;
}

const Block: FC<IProps> = ({ item }) => {
  return (
    <>
      <div className={styles.icon}>{item.icon}</div>
      <h4
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: item.title }}
      ></h4>
      <p
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: item.text }}
      ></p>
      <Link href={item.link}>
        <a className={styles.more}>
          <span className={styles.icon}>
            <LinkYellow />
          </span>
          More details
        </a>
      </Link>
    </>
  );
};

export default Block;
