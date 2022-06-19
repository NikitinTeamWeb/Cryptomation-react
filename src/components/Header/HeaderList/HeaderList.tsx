import {FC} from "react"
import cn from "classnames"
import styles from './headerList.module.scss';

interface IProps {
  stick: boolean
}

const HeaderList: FC<IProps> = ({stick}) => {
  return (
    <div className={cn(styles.list, {[styles.stick] : stick})}>
      <div className={styles.item}>Pricing</div>
      <div className={styles.item}>Use Cases</div>
      <div className={styles.item}>Docs</div>
      <div className={styles.item}>Blog</div>
    </div>
  );
};

export default HeaderList;
