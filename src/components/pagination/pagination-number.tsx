import React from 'react';
import Link from 'next/link';

import { range } from 'utils';
import { PER_PAGE } from 'index';
import styles from './index.module.css';

type P = {
  // Math.ceil(totalCount / PER_PAGE)を渡す
  maxPageNumber: number;
};

export const PaginationNumber: React.FC<P> = ({ maxPageNumber }) => {
  return (
    <ul className={styles.paginationNav}>
      {range(1, maxPageNumber).map((number, index) => (
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
