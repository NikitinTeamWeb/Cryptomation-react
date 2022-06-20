import { ReactNode, FC } from 'react';
import Link from 'next/link';
import styles from './block.module.scss';

import Textarea from '../Textarea/Textarea';
import LinkBlue from '../../../assets/images/link_blue.png';

interface IProps {
  id: number;
  title: string;
  text: string;
  link: string;
  color?: string;
  image?: any;
  imageText?: boolean;
}

const Block: FC<IProps> = ({
  id,
  title,
  text,
  link,
  image,
  imageText,
  color,
}) => {
  return (
    <>
      <Textarea image={image} imageText={imageText} color={color}>
        {id === 0 &&
          `http --json POST 'https://rpc.testnet.near.org/' 
    'Content-Type':'application/json' 
    jsonrpc="2.0" 
    id="dontcare" 
    method="block" 
    params:="{
    "block_id\": 66416900
}"`}
        {id === 1 &&
          `{

"status":"1",
"message":"OK",
"result":"361602993549000"

}`}
      </Textarea>
      <h3 className={styles.title}>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: text }} className={styles.text}></p>
      <Link href={link}>
        <a className={styles.documentation}>
          <span className={styles.icon}>
            <img src={LinkBlue.src} alt="" />
          </span>
          Documentation
        </a>
      </Link>
    </>
  );
};
export default Block;
