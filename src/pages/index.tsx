/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { SiteHeader } from 'components/site-header';
import { Footer } from 'components/footer';
import { siteName } from 'index';
import { getBlogList } from 'domains/microCMS/services/get-blog-list';
import { Pagination } from 'components/pagination';
import { BlogList } from 'components/blog/blog-list';

type P = InferGetStaticPropsType<typeof getStaticProps>;

const Index: NextPage<P> = ({ blogs, totalCount }) => {
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = async () => {
  const data = await getBlogList();

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default Index;
