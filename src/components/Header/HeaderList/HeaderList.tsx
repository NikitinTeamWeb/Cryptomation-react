import styles from './headerList.module.scss';

const HeaderList = () => {
  return (
    <div className={styles.list}>
      <div className={styles.item}>Pricing</div>
      <div className={styles.item}>Use Cases</div>
      <div className={styles.item}>Docs</div>
      <div className={styles.item}>Blog</div>
    </div>
  );
};

export default HeaderList;
