/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { SiteHeader } from 'components/site-header';
import { Footer } from 'components/footer';
import { ContextParams, siteName } from 'index';
import { getBlogListFilterByCategory } from 'domains/microCMS/services/get-blog-list';
import {
  getCategories,
  getCategoryNameById,
} from 'domains/microCMS/services/get-categoris';
import { BlogList } from 'components/blog/blog-list';
import { BlogResponse } from 'domains/microCMS/models/blog';
import styles from './index.module.css';

type P = {
  blogs: BlogResponse[];
  name: string;
};

const CategoryId: NextPage<P> = ({ blogs, name }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>{siteName}</title>
      </Head>
      <SiteHeader />
      <p className={styles.categoryTitle}>{name}に関する記事</p>
      <div className="main-wrapper">
        <BlogList blogs={blogs} />
      </div>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async (): Promise<{
  paths: string[];
  fallback: boolean;
}> => {
  const data = await getCategories();
  const paths = data.contents.map((content) => `/category/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const { id } = context.params as ContextParams;
  const data = await getBlogListFilterByCategory(id);
  const name = await getCategoryNameById(id);

  return {
    props: {
      blogs: data.contents,
      name,
    },
  };
};

export default CategoryId;
