import Menu from '../Menu/Menu';
import Info from '../Info/Info';
import styles from './bottom.module.scss';

const Bottom = () => {
  return (
    <div className={styles.content}>
      <p className={styles.text}>© 2022 CryptoMation. All rights reserved.</p>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.info}>
        <Info />
      </div>
    </div>
  );
};

export default Bottom;
