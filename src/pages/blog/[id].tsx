import React from 'react';
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';

import { getBlog } from 'domains/microCMS/services/get-blog';
import { getBlogList } from 'domains/microCMS/services/get-blog-list';
import { ContentLayout, MainContent, SideContent } from 'components/content';
import { BlogResponse } from 'domains/microCMS/models/blog';
import { ContextParams } from 'index';
import { Header } from 'components/header/header';
import { BlogContent } from 'components/content/blog-content';
import { Bio } from 'components/bio';
import { CategoryResponse } from 'domains/microCMS/models/category';
import { getSideMenuItem } from 'domains/microCMS/services/utils';

type P = {
  blog: BlogResponse;
  categories: CategoryResponse[];
  selfIntroduction: string;
};

const BlogId: NextPage<P> = ({ blog, categories, selfIntroduction }) => {
  return (
    <>
      <Header title={blog.title} />
      <ContentLayout>
        <MainContent>
          <BlogContent content={blog} />
        </MainContent>
        <SideContent>
          <Bio categories={categories} selfIntroduction={selfIntroduction} />
        </SideContent>
      </ContentLayout>
    </>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async (): Promise<{
  paths: string[];
  fallback: boolean;
}> => {
  const { totalCount } = await getBlogList();
  const data = await getBlogList(0, totalCount);
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const { id } = context.params as ContextParams;
  const data = await getBlog(id);
  const { categories, selfIntroduction } = await getSideMenuItem();

  return {
    props: {
      blog: data,
      categories,
      selfIntroduction,
    },
  };
};

export default BlogId;
