import EmailEnter from './EmailEnter/EmailEnter';

import styles from './headerEnter.module.scss';

const HeaderEnter = () => {
  return (
    <div className={styles.block}>
      HeaderEnter
      <EmailEnter />
    </div>
  );
};

export default HeaderEnter;
