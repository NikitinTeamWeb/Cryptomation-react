import { ReactNode, FC } from 'react';
import Link from 'next/link';
import Textarea from '../Textarea/Textarea';

import styles from './block.module.scss';
import LinkYellow from '../../../assets/images/link_yellow.svg';

interface IProps {
  id: number;
  title: string;
  text: string;
  link: string;
}

const Block: FC<IProps> = ({ id, title, text, link }) => {
  return (
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.textarea}>
        <Textarea>
          {id === 0 &&
            `{

"safeLow":{"maxPriorityFee":31.5333333532,"maxFee":31.5333333682},"standard":{"maxPriorityFee":33.69552669306667,"maxFee":33.695526708066666},"fast":{"maxPriorityFee":45.4303030196,"maxFee":45.430303034599994},"estimatedBaseFee":1.5e-8,"blockTime":3,"blockNumber":29307096

}`}
          {id === 1 &&
            `{

"status":"1","message":"OK","result":[{"blockNumber":"24741197","timeStamp":"1644422471","hash":"0x43d539e31a8671b98e4867d613234c2e9fadeece989939d46428c8ecfbb2101f","nonce":"0","blockHash":"0x928706113f3e304c3beae06d1cfd13cb26a0bfb80d0a4ae795d2971752f33811","transactionIndex":"46","from":"0xdec0de7e6ed3ee7bb3a2c0baae7827d101d1ec20","to":"0x25cbd58702f9976d1be6af14e33a5875176762d2","value":"1000000000000000000","gas":"21000","gasPrice":"29214713675","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"5892989","gasUsed":"21000","confirmations":"4565922"}]

}`}
          {id === 2 &&
            `"quote": 
{
"USD": {
"price": 6602.60701122, 
"volume_24h": 4314444687.5194, 
"volume_change_24h": -0.152774, 
"percent_change_1h": 0.988615, 
"percent_change_24h": 4.37185, 
"percent_change_7d": -12.1352, 
"percent_change_30d": -12.1352, 
"market_cap": 852164659250.2758, 
"market_cap_dominance": 51, 
"fully_diluted_market_cap": 952835089431.14, 
"last_updated": "2018-08-09T21:56:28.000Z"
}

}`}
        </Textarea>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={link}>
        <a className={styles.documentation}>
          <span className={styles.icon}>
            <LinkYellow />
          </span>
          Documentation
        </a>
      </Link>
    </div>
  );
};

export default Block;
