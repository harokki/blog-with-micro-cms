import React from 'react';
import Link from 'next/link';

import { BlogResponse } from 'domains/microCMS/models/blog';
import { utcToJST } from 'utils';
import { CategoryResponse } from 'domains/microCMS/models/category';
import { AboutResponse } from 'domains/microCMS/models/about';
import styles from './index.module.css';

type BlogProps = {
  content: BlogResponse;
};

type AboutProps = {
  content: AboutResponse;
};

const blogCategories = (categories: CategoryResponse[]) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Link href={`/category/${category.id}`}>
          <span key={category.id} className={styles.category}>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export const BlogContent: React.FC<BlogProps> = ({ content }) => {
  return (
    <main className={styles.blogContent}>
      <h1 className={styles.title}>{content.title}</h1>
      {content.categories ? blogCategories(content.categories) : ''}
      <p className={styles.publishedAt}>{utcToJST(content.publishedAt)}</p>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `${content.body ? content.body : ''}`,
        }}
      />
    </main>
  );
};

export const AboutContent: React.FC<AboutProps> = ({ content }) => {
  return (
    <main className={styles.blogContent}>
      <h1 className={styles.title}>{content.title}</h1>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `${content.body ? content.body : ''}`,
        }}
      />
    </main>
  );
};
