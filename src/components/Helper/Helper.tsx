import styles from './helper.module.scss';

import Block from './Block/Block';

const Helper = () => {
  return (
    <div className={styles.section}>
      <div className="wrapper">
        <h2 className={styles.title}>
          Helper API <br /> for you application
        </h2>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <Block
              title="Gas station API"
              text="Gas station api predict gas price for any network, use it for fast transaction."
            />
          </div>
          <div className={styles.block}>
            <Block
              title="Scan similar api"
              text="Scan similar api - we have kept the polygonscan contract so that you can try our service with minimal effort."
            />
          </div>
          <div className={styles.block}>
            <Block
              title="Cryptocurrency API"
              text="Get actual price for any coin/token by simply api."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helper;
