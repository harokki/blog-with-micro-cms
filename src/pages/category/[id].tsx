/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { SiteHeader } from 'components/site-header';
import { Footer } from 'components/footer';
import { siteName } from 'index';
import { getBlogListFilterByCategory } from 'domains/microCMS/services/get-blog-list';
import {
  getCategories,
  getCategoryNameById,
} from 'domains/microCMS/services/get-categoris';
import { BlogList } from 'components/blog/blog-list';
import styles from './index.module.css';

type P = InferGetStaticPropsType<typeof getStaticProps>;

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

// eslint-disable-next-line
export const getStaticProps = async (context: any) => {
  // eslint-disable-next-line
  const { id } = context.params;
  const stringId = id as string;
  const data = await getBlogListFilterByCategory(stringId);
  const name = await getCategoryNameById(stringId);

  return {
    props: {
      blogs: data.contents,
      name,
    },
  };
};

export default CategoryId;
