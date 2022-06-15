import Link from 'next/link';
import styles from './emailEnter.module.scss';

const EmailEnter = () => {
  return (
    <div className={styles.block}>
      <input type="text" className={styles.input} placeholder="Email" />
      <div className={styles.button}>
        <Link href="123">
          <a className="button button-sm">Log in</a>
        </Link>
      </div>
    </div>
  );
};

export default EmailEnter;
