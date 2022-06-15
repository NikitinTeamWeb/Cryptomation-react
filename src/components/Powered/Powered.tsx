import styles from './powered.module.scss';
import Blocks from './Blocks/Blocks';
import { arrayBuffer } from 'stream/consumers';

const Powered = () => {
  return (
    <div className={styles.section}>
      <div className="wrapper">
        <h2 className={styles.title}>Powered API</h2>
        <h3 className={styles.subtitle}>
          Rest API & Webhooks && GRPC methods.
        </h3>
        <div className={styles.text}>
          Our API allows you to
          <span className="yellowBlock">query historical data</span> that is
          currently not stored on your own database.
          <span className="yellowBlock">Provide blockchain data</span>
          and display it within your applications easily.
        </div>
        <Blocks />
      </div>
    </div>
  );
};

export default Powered;
