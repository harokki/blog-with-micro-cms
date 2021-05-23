/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';

import { Footer } from 'components/footer';
import { ContextParams, PER_PAGE, siteName } from 'index';
import { getBlogList } from 'domains/microCMS/services/get-blog-list';
import { BlogList } from 'components/blog/blog-list';
import { range } from 'utils';
import { PaginationArrow } from 'components/pagination/pagination-arrow';
import { BlogResponse } from 'domains/microCMS/models/blog';
import { Header } from 'components/header/header';
import { ContentLayout, MainContent, SideContent } from 'components/content';
import { Bio } from 'components/bio';
import { getAllCategories } from 'domains/microCMS/services/get-categoris';
import { CategoryResponse } from 'domains/microCMS/models/category';
import { getAbout } from 'domains/microCMS/services/get-about';

type P = {
  blogs: BlogResponse[];
  totalCount: number;
  currentPageNumber: number;
  categories: CategoryResponse[];
  selfIntroduction: string;
};

const BlogPageId: NextPage<P> = ({
  blogs,
  totalCount,
  currentPageNumber,
  categories,
  selfIntroduction,
}) => {
  return (
    <div className="wrapper">
      <Header title={siteName} />
      <ContentLayout>
        <MainContent>
          <BlogList blogs={blogs} />
          <PaginationArrow
            maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
            currentPageNumber={currentPageNumber}
          />
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
  const data = await getBlogList();
  const { totalCount } = data;
  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map(
    (i) => `/blog/page/${i}`,
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const { id } = context.params as ContextParams;
  const numId = Number(id);
  const data = await getBlogList((numId - 1) * PER_PAGE);
  const dataCategory = await getAllCategories();
  const authorData = await getAbout('author');

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
      currentPageNumber: numId,
      categories: dataCategory.contents,
      selfIntroduction: authorData.body,
    },
  };
};

export default BlogPageId;
