import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { SiteHeader } from 'components/site-header';
import { Footer } from 'components/footer';
import { getAbout } from 'domains/microCMS/services/get-about';
import { AboutContent } from 'components/content';
import { AboutResponse } from 'domains/microCMS/models/about';

type P = {
  privacy: AboutResponse;
};

const PrivacyPolicy: NextPage<P> = ({ privacy }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>{privacy.title}</title>
      </Head>
      <SiteHeader />
      <AboutContent content={privacy} />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAbout('privacy');

  return {
    props: {
      privacy: data,
    },
  };
};

export default PrivacyPolicy;
