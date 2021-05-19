import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { SiteHeader } from 'components/site-header';
import { Footer } from 'components/footer';
import { getAbout } from 'domains/microCMS/services/get-about';
import { AboutContent } from 'components/content';
import { AboutResponse } from 'domains/microCMS/models/about';

type P = {
  author: AboutResponse;
};

const AboutAuthor: NextPage<P> = ({ author }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>{author.title}</title>
      </Head>
      <SiteHeader />
      <AboutContent content={author} />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAbout('author');

  return {
    props: {
      author: data,
    },
  };
};

export default AboutAuthor;
