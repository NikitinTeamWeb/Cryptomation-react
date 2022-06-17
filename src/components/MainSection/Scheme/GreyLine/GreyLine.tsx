import { FC } from 'react';
import styles from './greyLine.module.scss';

interface IProps {
  id: string;
  path: string;
}

const GreyLine: FC<IProps> = ({ id, path }) => {
  return (
    <g id={id}>
      <path
        className={styles.line}
        opacity="0.6"
        d={path}
        stroke="#A95094"
        stroke-dasharray="4"
      />
    </g>
  );
};

export default GreyLine;
