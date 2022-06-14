import HeaderList from './HeaderList/HeaderList';
import HeaderEnter from './HeaderEnter/HeaderEnter';
import styles from './header.module.scss';

import Logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="#" className="logo">
        <img src={Logo.src} alt="" />
      </a>

      <div className={styles.list}>
        <HeaderList />
      </div>

      <div className={styles.enter}>
        <HeaderEnter />
      </div>
    </div>
  );
};

export default Header;
