/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import { SiteHeader } from 'components/site-header';
import { Footer } from 'components/footer';
import { PER_PAGE, siteName } from 'index';
import { getBlogList } from 'domains/microCMS/services/get-blog-list';
import { BlogList } from 'components/blog/blog-list';
import { PaginationArrow } from 'components/pagination/pagination-arrow';
import { BlogResponse } from 'domains/microCMS/models/blog';

type P = {
  blogs: BlogResponse[];
  totalCount: number;
};

const Index: NextPage<P> = ({ blogs, totalCount }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>{siteName}</title>
      </Head>
      <SiteHeader />
      <div className="main-wrapper">
        <BlogList blogs={blogs} />
        <PaginationArrow
          currentPageNumber={1}
          maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
        />
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getBlogList();

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default Index;
