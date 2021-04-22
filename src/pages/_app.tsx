import React from 'react';
import { AppProps } from 'next/app';

import 'minireset.css';
import '../base.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
