import Link from 'next/link';
import React from 'react';

import { BlogResponse } from 'domains/microCMS/models/blog';
import styles from './index.module.css';

type P = {
  blog: BlogResponse;
};

export const BlogLink: React.FC<P> = ({ blog }) => {
  if (blog.externalUrl) {
    return (
      <Link href={blog.externalUrl}>
        <a
          className={styles.blogLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {blog.title}
        </a>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${blog.id}`}>
      <a className={styles.blogLink}>{blog.title}</a>
    </Link>
  );
};
