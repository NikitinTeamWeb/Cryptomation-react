import Link from 'next/link';

import HeaderList from './HeaderList/HeaderList';
import HeaderEnter from './HeaderEnter/HeaderEnter';
import styles from './header.module.scss';

import LogoSVG from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="wrapper">
        <div className={styles.content}>
          <Link href="/123">
            <a className={styles.logo}>
              <LogoSVG />
            </a>
          </Link>
          <div className={styles.list}>
            <HeaderList />
          </div>

          <div className={styles.enter}>
            <HeaderEnter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
