import React from 'react';
import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

import { SiteHeader } from 'components/site-header';
import { Footer } from 'components/footer';
import { getAbout } from 'domains/microCMS/services/get-about';
import commonStyles from '../index.module.css';

type P = InferGetStaticPropsType<typeof getStaticProps>;

const AboutId: NextPage<P> = ({ author }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>{author.title}</title>
      </Head>
      <SiteHeader />
      <main className={commonStyles.blogContent}>
        <h1 className={commonStyles.title}>{author.title}</h1>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `${author.body ? author.body : ''}`,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

// eslint-disable-next-line
export const getStaticProps = async () => {
  const data = await getAbout('author');

  return {
    props: {
      author: data,
    },
  };
};

export default AboutId;
