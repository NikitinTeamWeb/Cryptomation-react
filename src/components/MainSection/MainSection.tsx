import styles from './mainSection.module.scss';

import Scheme from './Scheme/Scheme';

const MainSection = () => {
  return (
    <div className={styles.section}>
      <div className="wrapper">
        <h1 className={styles.title}>
          We give you access to a sea of crypto data.
        </h1>
        <h2 className={styles.subtitle}>
          <span className={styles.yellowBlock}>Build your own apps</span> using
          this data for your automation, analytics through standard development
          tools such as <span className={styles.yellow}>Rest API</span> /
          <span className={styles.red}>gRPC</span> /
          <span className={styles.blue}>JDBC</span>.
        </h2>
        <div className={styles.scheme}>
          <Scheme />
        </div>
        <div className={styles.button}>Create free project</div>
      </div>
    </div>
  );
};

export default MainSection;
