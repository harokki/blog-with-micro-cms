/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';

import { Footer } from 'components/footer';
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
import { getAbout } from 'domains/microCMS/services/get-about';
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
    <div className="wrapper">
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
      <Footer />
    </div>
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
  const dataCategory = await getAllCategories();
  const authorData = await getAbout('author');

  return {
    props: {
      blogs: data.contents,
      name,
      categories: dataCategory.contents,
      selfIntroduction: authorData.body,
    },
  };
};

export default CategoryId;
