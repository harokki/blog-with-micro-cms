/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NextPage, GetStaticProps } from 'next';

import { PER_PAGE, siteName } from 'index';
import { getBlogList } from 'domains/microCMS/services/get-blog-list';
import { BlogList } from 'components/blog/blog-list';
import { PaginationArrow } from 'components/pagination/pagination-arrow';
import { BlogResponse } from 'domains/microCMS/models/blog';
import { Header } from 'components/header/header';
import { ContentLayout, MainContent, SideContent } from 'components/content';
import { Bio } from 'components/bio';
import { CategoryResponse } from 'domains/microCMS/models/category';
import { getSideMenuItem } from 'domains/microCMS/services/utils';

type P = {
  blogs: BlogResponse[];
  totalCount: number;
  categories: CategoryResponse[];
  selfIntroduction: string;
};

const Index: NextPage<P> = ({
  blogs,
  totalCount,
  categories,
  selfIntroduction,
}) => {
  return (
    <>
      <Header title={siteName} />
      <ContentLayout>
        <MainContent>
          <BlogList blogs={blogs} />
          <PaginationArrow
            currentPageNumber={1}
            maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
          />
        </MainContent>
        <SideContent>
          <Bio categories={categories} selfIntroduction={selfIntroduction} />
        </SideContent>
      </ContentLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getBlogList();
  const { categories, selfIntroduction } = await getSideMenuItem();

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
      categories,
      selfIntroduction,
    },
  };
};

export default Index;
