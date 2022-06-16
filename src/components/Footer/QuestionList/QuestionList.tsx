import Link from 'next/link';
import styles from './questionList.module.scss';

import LinkYellowIcon from '../../../assets/images/link_yellow.svg';
import FlachIcon from '../../../assets/images/flash.svg';

const QuestionList = () => {
  return (
    <div className={styles.list}>
      <Link href="/123">
        <a className={styles.item}>
          <span className={styles.icon}>
            <LinkYellowIcon />
          </span>
          Write to us
        </a>
      </Link>
      <Link href="/123">
        <a className={styles.item}>
          <span className={styles.icon}>
            <FlachIcon />
          </span>
          Get Started!
        </a>
      </Link>
    </div>
  );
};

export default QuestionList;
