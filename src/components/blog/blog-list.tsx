import React from 'react';
import Link from 'next/link';

import { BlogResponse } from 'domains/microCMS/models/blog';
import { bodyToDescription, utcToJST } from 'utils';
import styles from 'pages/index.module.css';

type P = {
  blogs: BlogResponse[];
};

export const BlogList: React.FC<P> = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <section className={styles.blogWrapper} key={blog.id}>
          <p>{utcToJST(blog.createdAt)}</p>
          <Link href={`/blog/${blog.id}`}>
            <a className={styles.blogLink}>{blog.title}</a>
          </Link>
          <p className={styles.blogDescription}>
            {bodyToDescription(blog.body, 100)}
          </p>
        </section>
      ))}
    </>
  );
};
