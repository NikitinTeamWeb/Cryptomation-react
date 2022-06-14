import styles from './googleEnter.module.scss';

import GoogleIcon from '../../../../assets/images/google.png';

const GoogleEnter = () => {
  return (
    <div className={styles.button}>
      Continue with
      <span className={styles.icon}>
        <img src={GoogleIcon.src} alt="" />
      </span>
    </div>
  );
};

export default GoogleEnter;
