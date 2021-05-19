import React from 'react';
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';

import { SiteHeader } from 'components/site-header';
import { Footer } from 'components/footer';
import { getBlog } from 'domains/microCMS/services/get-blog';
import { getBlogList } from 'domains/microCMS/services/get-blog-list';
import { BlogContent } from 'components/content';
import { BlogResponse } from 'domains/microCMS/models/blog';
import { ContextParams } from 'index';

type P = {
  blog: BlogResponse;
};

const BlogId: NextPage<P> = ({ blog }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>{blog.title}</title>
      </Head>
      <SiteHeader />
      <BlogContent content={blog} />
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

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const { id } = context.params as ContextParams;
  const data = await getBlog(id);

  return {
    props: {
      blog: data,
    },
  };
};

export default BlogId;
