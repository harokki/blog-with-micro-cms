import React from 'react';

import { AboutResponse } from 'domains/microCMS/models/about';
import styles from './index.module.css';

type AboutProps = {
  content: AboutResponse;
};

export const AboutContent: React.FC<AboutProps> = ({ content }) => {
  return (
    <main>
      <h1 className={styles.title}>{content.title}</h1>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `${content.body ? content.body : ''}`,
        }}
      />
    </main>
  );
};
