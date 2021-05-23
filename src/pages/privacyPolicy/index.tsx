import React from 'react';
import { GetStaticProps, NextPage } from 'next';

import { getAbout } from 'domains/microCMS/services/get-about';
import { ContentLayout, MainContent, SideContent } from 'components/content';
import { AboutResponse } from 'domains/microCMS/models/about';
import { Header } from 'components/header/header';
import { Bio } from 'components/bio';
import { AboutContent } from 'components/content/about-content';
import { CategoryResponse } from 'domains/microCMS/models/category';
import { getSideMenuItem } from 'domains/microCMS/services/utils';

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
    <>
      <Header title={privacy.title} />
      <ContentLayout>
        <MainContent>
          <AboutContent content={privacy} />
        </MainContent>
        <SideContent>
          <Bio categories={categories} selfIntroduction={selfIntroduction} />
        </SideContent>
      </ContentLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAbout('privacy');
  const { categories, selfIntroduction } = await getSideMenuItem();

  return {
    props: {
      privacy: data,
      categories,
      selfIntroduction,
    },
  };
};

export default PrivacyPolicy;
