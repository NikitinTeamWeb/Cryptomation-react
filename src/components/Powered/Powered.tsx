import styles from './powered.module.scss';

import Block from './Block/Block';

const Powered = () => {
  return (
    <div className={styles.section}>
      <div className="wrapper">
        <h2 className={styles.title}>Powered API</h2>
        <h3 className={styles.subtitle}>
          Rest API & Webhooks && GRPC methods.
        </h3>
        <div className={styles.text}>
          Our API allows you to{' '}
          <span className={styles.yellowBlock}>query historical data</span> that
          is currently not stored on your own database.{' '}
          <span className={styles.yellowBlock}>Provide blockchain data</span>
          and display it within your applications easily.
        </div>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <Block
              title="GRPC methods"
              text="Don't want unexpected errors in your code? Use our strongly typed APIs with proto"
            />
          </div>
          <div className={styles.block}>
            <Block
              title="Rest API"
              text={[
                <span>Getting crypto data</span>,
                'in you web3 app with any http client. ',
              ]}
            />
          </div>
          <div className={styles.block}>
            <Block
              title="GRPC methods"
              text={[
                'Need specific information for data analysis?',
                <br></br>,
                <span>Get access</span>,
                'to the blockchain through the',
                <span>database</span>,
                '. Build your reports and visualize on any BI',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Powered;
