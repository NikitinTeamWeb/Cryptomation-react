import EmailEnter from './EmailEnter/EmailEnter';
import GoogleEnter from './GoogleEnter/GoogleEnter';

import styles from './headerEnter.module.scss';

const HeaderEnter = () => {
  return (
    <>
      <div className={styles.top}>
        <EmailEnter />
      </div>
      <GoogleEnter />
    </>
  );
};

export default HeaderEnter;
