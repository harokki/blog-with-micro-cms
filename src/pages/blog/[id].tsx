import React from 'react';
import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

import { SiteHeader } from 'components/site-header';
import { Footer } from 'components/footer';
import { utcToJST } from 'utils';
import { getBlog } from 'domains/microCMS/services/get-blog';
import { getBlogList } from 'domains/microCMS/services/get-blog-list';
import commonStyles from '../index.module.css';

type P = InferGetStaticPropsType<typeof getStaticProps>;

const BlogId: NextPage<P> = ({ blog }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>{blog.title}</title>
      </Head>
      <SiteHeader />
      <main className={commonStyles.blogContent}>
        <h1 className={commonStyles.title}>{blog.title}</h1>
        <p className={commonStyles.publishedAt}>{utcToJST(blog.publishedAt)}</p>
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
  const data = await getBlogList();
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

// eslint-disable-next-line
export const getStaticProps = async (context: any) => {
  // eslint-disable-next-line
  const { id } = context.params;
  const data = await getBlog(id as string);

  return {
    props: {
      blog: data,
    },
  };
};

export default BlogId;
