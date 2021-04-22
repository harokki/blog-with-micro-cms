/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { BlogListResponse } from 'types/blog';
import Link from 'next/link';
import { SiteHeader } from 'components/site-header';
import { Footer } from 'components/footer';

import { utcToJST } from 'utils';
import { siteName } from 'index';
import styles from './index.module.css';

type P = InferGetStaticPropsType<typeof getStaticProps>;

const bodyToDescription = (body: string | undefined) => {
  const description = body || '';

  return description.substring(0, 99).replace(/(<([^>]+)>)/gi, '');
};

const Index: NextPage<P> = ({ blogs }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>{siteName}</title>
      </Head>
      <SiteHeader />
      {blogs.map((blog) => (
        <section className={styles.blogWrapper} key={blog.id}>
          <p>{utcToJST(blog.createdAt)}</p>
          <h1 className={styles.blogLink}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </h1>
          <p>{bodyToDescription(blog.body)}</p>
        </section>
      ))}
      <Footer />
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  } as RequestInit;
  const data = (await fetch(`${process.env.API_ENDPOINT as string}/blog`, key)
    .then((res) => res.json())
    .catch(() => null)) as BlogListResponse;

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Index;
