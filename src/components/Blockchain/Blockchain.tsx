import Scheme from './Scheme/Scheme';

import styles from './blockchain.module.scss';

const Blockchain = () => {
  return (
    <div className={styles.section}>
      <div className="wrapper">
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className="title">
              Fast <br /> blockhain <br /> nodes
            </h2>
            <p className={styles.text}>
              Deploy fast blockchain node in 5 minutes: getting reliable <br />
              <span className="yellowBlock first">
                access to the Ethereum/Polygon/Binance
              </span>
              and IPFS networks so you can focus on building and scaling web3
              software.
            </p>
          </div>
          <div className={styles.scheme}>
            <Scheme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
