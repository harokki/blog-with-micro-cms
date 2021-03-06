import React from 'react';
import { useRouter } from 'next/router';
import { siteName } from 'index';
import styles from './index.module.css';

export const SiteHeader: React.FC = () => {
  const router = useRouter();
  const handleClickLogo = React.useCallback(() => {
    void router.push('/');
  }, [router]);

  return (
    <header className={styles.pageHeader}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <a onClick={() => handleClickLogo()} aria-hidden="true">
            <img
              className={styles.userIcon}
              src="/header.png"
              alt="site icon"
            />
          </a>
          <div className={styles.siteText}>{siteName}</div>
        </div>
      </div>
    </header>
  );
};
