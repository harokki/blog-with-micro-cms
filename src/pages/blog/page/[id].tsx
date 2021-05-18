/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { SiteHeader } from 'components/site-header';
import { Footer } from 'components/footer';
import { PER_PAGE, siteName } from 'index';
import { getBlogList } from 'domains/microCMS/services/get-blog-list';
import { Pagination } from 'components/pagination';
import { BlogList } from 'components/blog/blog-list';
import { range } from 'utils';

type P = InferGetStaticPropsType<typeof getStaticProps>;

const BlogPageId: NextPage<P> = ({ blogs, totalCount }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>{siteName}</title>
      </Head>
      <SiteHeader />
      <BlogList blogs={blogs} />
      <Pagination totalCount={totalCount} />
      <Footer />
    </div>
  );
};

export const getStaticPaths = async (): Promise<{
  paths: string[];
  fallback: boolean;
}> => {
  const data = await getBlogList();
  const { totalCount } = data;
  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map(
    (i) => `/blog/page/${i}`,
  );

  return { paths, fallback: false };
};

// eslint-disable-next-line
export const getStaticProps = async (context: any) => {
  // eslint-disable-next-line
  const { id } = context.params;
  const data = await getBlogList((id - 1) * PER_PAGE);

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default BlogPageId;
