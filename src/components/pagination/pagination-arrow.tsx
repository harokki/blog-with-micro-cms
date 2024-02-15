import React from 'react';
import Link from 'next/link';

import styles from './index.module.css';

type P = {
  maxPageNumber: number;
  currentPageNumber: number;
};

export const PaginationArrow: React.FC<P> = ({
  maxPageNumber,
  currentPageNumber,
}) => {
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  return (
    <div className={styles.arrowPagination}>
      {currentPageNumber !== 1 && (
        <Link legacyBehavior href={`/blog/page/${prevPage}`}>
          <a data-testid="previous">&lt; Previous</a>
        </Link>
      )}
      {currentPageNumber !== maxPageNumber && (
        <Link legacyBehavior href={`/blog/page/${nextPage}`}>
          <a data-testid="next" className={styles.nextArrow}>
            Next &gt;
          </a>
        </Link>
      )}
    </div>
  );
};
