import React from 'react';
import { footerCopy } from 'index';

export const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        <small>&copy; {footerCopy}</small>
      </p>
    </footer>
  );
};
