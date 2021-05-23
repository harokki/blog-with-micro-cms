/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';

import { ContextParams, siteName } from 'index';
import { getBlogListFilterByCategory } from 'domains/microCMS/services/get-blog-list';
import {
  getAllCategories,
  getCategoryNameById,
} from 'domains/microCMS/services/get-categoris';
import { BlogList } from 'components/blog/blog-list';
import { BlogResponse } from 'domains/microCMS/models/blog';
import { Header } from 'components/header/header';
import { ContentLayout, MainContent, SideContent } from 'components/content';
import { Bio } from 'components/bio';
import { CategoryResponse } from 'domains/microCMS/models/category';
import { getSideMenuItem } from 'domains/microCMS/services/utils';
import styles from './index.module.css';

type P = {
  blogs: BlogResponse[];
  name: string;
  categories: CategoryResponse[];
  selfIntroduction: string;
};

const CategoryId: NextPage<P> = ({
  blogs,
  name,
  categories,
  selfIntroduction,
}) => {
  return (
    <>
      <Header title={siteName} />
      <ContentLayout>
        <MainContent>
          <p className={styles.categoryTitle}>{name}に関する記事</p>
          <BlogList blogs={blogs} />
        </MainContent>
        <SideContent>
          <Bio categories={categories} selfIntroduction={selfIntroduction} />
        </SideContent>
      </ContentLayout>
    </>
  );
};

export const getStaticPaths = async (): Promise<{
  paths: string[];
  fallback: boolean;
}> => {
  const data = await getAllCategories();
  const paths = data.contents.map((content) => `/category/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const { id } = context.params as ContextParams;
  const data = await getBlogListFilterByCategory(id);
  const name = await getCategoryNameById(id);
  const { categories, selfIntroduction } = await getSideMenuItem();

  return {
    props: {
      blogs: data.contents,
      name,
      categories,
      selfIntroduction,
    },
  };
};

export default CategoryId;
