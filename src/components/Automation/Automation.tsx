import Scheme from './Scheme/Scheme';

import styles from './automation.module.scss';

import El1 from '../../assets/images/Powered/brackets_blue.svg';
import El2 from '../../assets/images/Powered/brackets_yellow.svg';

const Automation = () => {
  return (
    <div className={styles.section}>
      <div className="wrapper">
        <div className={styles.el1}>
          <El1 />
        </div>
        <div className={styles.el2}>
          <El2 />
        </div>
        <h2 className="title white">Automation without code</h2>
        <p className={styles.text}>
          <span className="yellowBlock">Build flow without code.</span> <br />{' '}
          Create events/alert on modification blockchain network <br /> (changed
          balance, send transaction from wallet and e.t.c) <br /> and send it
          information to you server with any conditions without code.
        </p>
        <div className={styles.scheme}>
          <Scheme />
        </div>
      </div>
    </div>
  );
};

export default Automation;
