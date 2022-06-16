import Link from 'next/link';
import styles from './info.module.scss';

import TwitterIcon from '../../../assets/images/twitter.svg';

const Info = () => {
  const arr = [
    {
      id: 0,
      title: 'Privacy Policy',
      link: '/1',
    },
    {
      id: 1,
      title: 'Terms & Conditions',
      link: '/2',
    },
  ];

  return (
    <div className={styles.list}>
      {arr.map(({ id, title, link }) => {
        return (
          <Link href={link} key={id}>
            <a className={styles.item}>{title}</a>
          </Link>
        );
      })}
      <Link href="/1">
        <a className={styles.twiter}>
          <TwitterIcon />
        </a>
      </Link>
    </div>
  );
};

export default Info;
