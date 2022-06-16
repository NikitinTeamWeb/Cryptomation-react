import Link from 'next/link';
import styles from './menu.module.scss';

const arr = [
  {
    id: 0,
    title: 'Pricing',
    link: '/1',
  },
  {
    id: 1,
    title: 'Use Cases',
    link: '/1',
  },
  {
    id: 2,
    title: 'Docs',
    link: '/1',
  },
  {
    id: 3,
    title: 'Blog',
    link: '/1',
  },
];

const Menu = () => {
  return (
    <div className={styles.list}>
      {arr.map(({ id, title, link }) => {
        return (
          <Link href={link} key={id}>
            <a className={styles.item}>{title}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
