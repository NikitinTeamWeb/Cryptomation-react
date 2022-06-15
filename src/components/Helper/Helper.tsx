import Blocks from './Blocks/Blocks';

import styles from './helper.module.scss';

import El1 from '../../assets/images/Powered/brackets_blue.svg';
import El2 from '../../assets/images/Powered/brackets_yellow.svg';

const Helper = () => {
  return (
    <div className={styles.section}>
      <div className="wrapper">
        <div className={styles.el1}>
          <El1 />
        </div>
        <div className={styles.el2}>
          <El2 />
        </div>
        <h2 className="title white">
          Helper API <br /> for you application
        </h2>
        <Blocks />
      </div>
    </div>
  );
};

export default Helper;
