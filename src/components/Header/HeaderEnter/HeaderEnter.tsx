import { FC } from 'react';

import EmailEnter from './EmailEnter/EmailEnter';
import GoogleEnter from './GoogleEnter/GoogleEnter';
import StickEnter from './StickEnter/StickEnter';

import styles from './headerEnter.module.scss';

interface IProps {
  stick: boolean;
}

const HeaderEnter: FC<IProps> = ({ stick }) => {
  return (
    <>
      {stick ? (
        <StickEnter />
      ) : (
        <>
          <div className={styles.top}>
            <EmailEnter />
          </div>
          <GoogleEnter />
        </>
      )}
    </>
  );
};

export default HeaderEnter;
