import React from 'react';
import { InferGetStaticPropsType, NextPage } from 'next';
import { BlogListResponse, BlogResponse } from 'types/blog';
import Head from 'next/head';
import { SiteHeader } from 'components/site-header';
import { Footer } from 'components/footer';
import { utcToJST } from 'utils';

import styles from './index.module.css';

type P = InferGetStaticPropsType<typeof getStaticProps>;

const BlogId: NextPage<P> = ({ blog }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>{blog.title}</title>
      </Head>
      <SiteHeader />
      <main className={styles.blogContent}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.publishedAt}>{utcToJST(blog.publishedAt)}</p>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `${blog.body ? blog.body : ''}`,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async (): Promise<{
  paths: string[];
  fallback: boolean;
}> => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  } as RequestInit;
  const data = (await fetch(`${process.env.API_ENDPOINT as string}/blog`, key)
    .then((res) => res.json())
    .catch(() => null)) as BlogListResponse;
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

// eslint-disable-next-line
export const getStaticProps = async (context: any) => {
  // eslint-disable-next-line
  const { id } = context.params;
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  } as RequestInit;
  const data = (await fetch(
    `${process.env.API_ENDPOINT as string}/blog/${id as string}`,
    key,
  )
    .then((res) => res.json())
    .catch(() => null)) as BlogResponse;

  return {
    props: {
      blog: data,
    },
  };
};

export default BlogId;
