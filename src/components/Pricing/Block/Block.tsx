import { FC, ReactNode } from 'react';

import styles from './block.module.scss';

interface IProps {
  item: IProp;
}

interface IProp {
  title: string;
  subtitle: string;
  price: number;
  list: Array<IItem>;
  button: IButton;
}

interface IItem {
  id: number;
  text: string;
}

interface IButton {
  type: string;
  text: string;
}

const Block: FC<IProps> = ({ item }) => {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>{item.title}</h3>
      <h4 className={styles.subtitle}>{item.subtitle}</h4>
      <p className={styles.price}>
        ${item.price}
        <span>mo</span>
      </p>
      <ul className={styles.list}>
        {item.list.map(({ id, text }) => {
          return (
            <li className={styles.item} key={id}>
              {text}
            </li>
          );
        })}
      </ul>
      <div className={styles.button}>{item.button.text}</div>
    </div>
  );
};

export default Block;
