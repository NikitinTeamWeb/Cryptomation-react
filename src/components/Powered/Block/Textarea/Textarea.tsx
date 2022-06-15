import styles from './textarea.module.scss';

import LightsIcon from '../../../../assets/images/Powered/Lights.png';

const Textarea = () => {
  return (
    <div className={styles.block}>
      <div className={styles.top}>
        <img src={LightsIcon.src} alt="" />
      </div>
      <p className={styles.text}>
        {`http --json POST 'https://rpc.testnet.near.org/' \
    'Content-Type':'application/json' \
    jsonrpc="2.0" \
    id="dontcare" \
    method="block" \
    params:="{
  \"block_id\": 66416900
}"`}
      </p>
    </div>
  );
};

export default Textarea;
