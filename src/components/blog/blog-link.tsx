import Link from 'next/link';
import React from 'react';
import { Zenn, Qiita } from '@icons-pack/react-simple-icons';

import { BlogResponse } from 'domains/microCMS/models/blog';
import styles from './index.module.css';

type P = {
  blog: BlogResponse;
};

const getIcon = (hostname: string) => {
  if (hostname === 'zenn.dev') {
    return <Zenn color="#3EA8FF" size={18} />;
  }

  if (hostname === 'qiita.com') {
    return <Qiita color="#55C500" size={36} />;
  }

  return null;
};

export const BlogLink: React.FC<P> = ({ blog }) => {
  if (blog.externalUrl) {
    const { hostname } = new URL(blog.externalUrl);

    return (
      <>
        <Link legacyBehavior href={blog.externalUrl}>
          <a
            className={styles.blogLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {blog.title}
          </a>
        </Link>
        {getIcon(hostname)}
      </>
    );
  }

  return (
    <Link legacyBehavior href={`/blog/${blog.id}`}>
      <a className={styles.blogLink}>{blog.title}</a>
    </Link>
  );
};
