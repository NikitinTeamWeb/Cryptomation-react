import styles from './googleEnter.module.scss';

import GoogleIcon from '../../../../assets/images/google.svg';

const GoogleEnter = () => {
  return (
    <div className={styles.button}>
      Continue with
      <span className={styles.icon}>
        <GoogleIcon />
      </span>
    </div>
  );
};

export default GoogleEnter;
