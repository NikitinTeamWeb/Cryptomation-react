import { FC } from 'react';
import styles from './line.module.scss';

interface IProps {
  id: any;
  path: string;
}

const Line: FC<IProps> = ({ id, path }) => {
  return (
    <g>
      <path
        className={styles.line}
        id={'line-' + id}
        opacity="0.6"
        d={path}
        stroke="#A95094"
        stroke-dasharray="4"
      />
    </g>
  );
};

export default Line;
