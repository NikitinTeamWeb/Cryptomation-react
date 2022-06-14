import HeaderList from './HeaderList/HeaderList';
import HeaderEnter from './HeaderEnter/HeaderEnter';
import styles from './header.module.scss';

import Logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="wrapper">
        <div className={styles.content}>
          <a href="#" className={styles.logo}>
            <img src={Logo.src} alt="" />
          </a>

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
