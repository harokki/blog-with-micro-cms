import React from 'react';
import { AppProps } from 'next/app';

import { usePageView } from 'hooks/usePageView';
import 'minireset.css';
import '../base.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageView();

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
