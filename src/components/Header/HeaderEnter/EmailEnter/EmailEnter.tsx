import styles from './emailEnter.module.scss';

const EmailEnter = () => {
  return (
    <div className={styles.block}>
      <input type="text" className={styles.input} />
      <div className={styles.button}>Log in</div>
    </div>
  );
};

export default EmailEnter;
