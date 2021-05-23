import React from 'react';

import { CategoryResponse } from 'domains/microCMS/models/category';
import styles from './index.module.css';

type P = {
  categories?: CategoryResponse[];
  selfIntroduction?: string;
};

export const Bio: React.FC<P> = ({ categories, selfIntroduction }) => {
  return (
    <div className={styles.bioWrapper}>
      <div className={styles.bioHeader}>
        <img className={styles.userIcon} src="/header.png" alt="site icon" />
        <p className={styles.bioName}>rokki</p>
      </div>
      <div className={styles.bioMain}>
        <div
          className={styles.bioDescription}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `${selfIntroduction || ''}`,
          }}
        />
      </div>
      <div className="side-category">
        <p className={styles.category}>カテゴリ一覧</p>
        {categories?.map((category) => {
          return <p key={category.id}>{category.name}</p>;
        })}
      </div>
    </div>
  );
};
