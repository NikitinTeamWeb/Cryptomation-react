import Link from 'next/link';
import styles from './stickEnter.module.scss';

const StickEnter = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.button}>
        <Link href="123">
          <a className="button button-sm button-border">Log in</a>
        </Link>
      </div>
      <div className={styles.button}>
        <Link href="123">
          <a className="button button-sm">Create project</a>
        </Link>
      </div>
    </div>
  );
};

export default StickEnter;
