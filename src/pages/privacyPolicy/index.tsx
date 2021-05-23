import React from 'react';
import { GetStaticProps, NextPage } from 'next';

import { Footer } from 'components/footer';
import { getAbout } from 'domains/microCMS/services/get-about';
import { ContentLayout, MainContent, SideContent } from 'components/content';
import { AboutResponse } from 'domains/microCMS/models/about';
import { Header } from 'components/header/header';
import { Bio } from 'components/bio';
import { AboutContent } from 'components/content/about-content';
import { getAllCategories } from 'domains/microCMS/services/get-categoris';
import { CategoryResponse } from 'domains/microCMS/models/category';

type P = {
  privacy: AboutResponse;
  categories: CategoryResponse[];
  selfIntroduction: string;
};

const PrivacyPolicy: NextPage<P> = ({
  privacy,
  categories,
  selfIntroduction,
}) => {
  return (
    <div className="wrapper">
      <Header title={privacy.title} />
      <ContentLayout>
        <MainContent>
          <AboutContent content={privacy} />
        </MainContent>
        <SideContent>
          <Bio categories={categories} selfIntroduction={selfIntroduction} />
        </SideContent>
      </ContentLayout>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAbout('privacy');
  const categoryData = await getAllCategories();
  const authorData = await getAbout('author');

  return {
    props: {
      privacy: data,
      categories: categoryData.contents,
      selfIntroduction: authorData.body,
    },
  };
};

export default PrivacyPolicy;
