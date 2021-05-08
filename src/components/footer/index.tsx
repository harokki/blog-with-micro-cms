import React from 'react';
import { useRouter } from 'next/router';

import { footerCopy } from 'index';
import styles from './index.module.css';

export const Footer: React.FC = () => {
  const router = useRouter();
  const handleClickPrivacy = React.useCallback(() => {
    void router.push('/privacyPolicy');
  }, [router]);

  return (
    <footer>
      <p>
        <small>
          &copy; {footerCopy} |{' '}
          <a
            onClick={handleClickPrivacy}
            aria-hidden="true"
            className={styles.privacyPolicy}
          >
            プライバシーポリシー
          </a>
        </small>
      </p>
    </footer>
  );
};
