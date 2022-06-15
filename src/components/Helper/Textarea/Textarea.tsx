import styles from './textarea.module.scss';

import LightsIcon from '../../../assets/images/Powered/Lights.svg';

const Textarea = () => {
  return (
    <div className={styles.block}>
      <div className={styles.top}>
        <LightsIcon />
      </div>
      <p className={styles.text}>
        http --json POST 'https://rpc.testnet.near.org/' \
        <br /> 'Content-Type':'application/json' \
        <br />
        jsonrpc="2.0" \
        <br />
        id="dontcare" \
        <br />
        method="block" \
        <br />
        params:="
        <br />
        \"block_id\": 66416900 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellat, sunt. adipisicing elit. Repellat, sunt.
        adipisicing elit. Repellat, sunt.
        <br /> adipisicing elit. Repellat, sunt.
        <br /> adipisicing elit. Repellat, sunt. adipisicing elit. Repellat,
        adipisicing elit. Repellat, sunt.
        <br /> adipisicing elit. Repellat, sunt.
        <br /> adipisicing elit. Repellat, sunt. adipisicing elit. Repellat,
        sunt.
      </p>
    </div>
  );
};

export default Textarea;
