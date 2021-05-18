import React from 'react';
import Link from 'next/link';

import { range } from 'utils';
import { PER_PAGE } from 'index';
import styles from './index.module.css';

type P = {
  totalCount: number;
};

export const Pagination: React.FC<P> = ({ totalCount }) => {
  return (
    <ul className={styles.paginationNav}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          <Link href={`/blog/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
