import React from 'react';

import { BlogResponse } from 'domains/microCMS/models/blog';
import { bodyToDescription, utcToJST } from 'utils';
import styles from './index.module.css';
import { BlogLink } from './blog-link';

type P = {
  blogs: BlogResponse[];
};

export const BlogList: React.FC<P> = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <section className={styles.blogWrapper} key={blog.id}>
          <p>{utcToJST(blog.createdAt)}</p>
          <BlogLink blog={blog} />
          <p className={styles.blogDescription}>
            {bodyToDescription(blog.body, 100)}
          </p>
        </section>
      ))}
    </>
  );
};
