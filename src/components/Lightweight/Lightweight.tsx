import styles from './lightweight.module.scss';

import Scheme from './Scheme/Scheme';

const Lightweight = () => {
  return (
    <div className={styles.section}>
      <div className="wrapper">
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className="title">Lightweight SDK for fast creating Dapps</h2>
            <div className={styles.text}>
              <span className="yellowBlock first">Bring web3</span> to any
              platform simply by installing a small SDK. Authenticate user,
              perform transactions via metamask through our api.
            </div>
          </div>
          <div className={styles.scheme}>
            <Scheme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightweight;
