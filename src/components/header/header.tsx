import React from 'react';
import Head from 'next/head';

import { SiteHeader } from './site-header';

type P = {
  title: string;
};

export const Header: React.FC<P> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <SiteHeader />
    </>
  );
};
