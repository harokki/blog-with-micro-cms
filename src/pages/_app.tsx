import React from 'react';
import { AppProps } from 'next/app';

import { usePageView } from 'hooks/usePageView';
import { Footer } from 'components/footer';
import 'minireset.css';
import '../base.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageView();

  return (
    <div className="wrapper">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
