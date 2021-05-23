import React from 'react';

export const MainContent: React.FC = ({ children }) => (
  <div className="main-content">{children}</div>
);

export const SideContent: React.FC = ({ children }) => (
  <div className="side-content">{children}</div>
);

export const ContentLayout: React.FC = ({ children }) => (
  <div className="content-wrapper">
    <div className="content-layout">{children}</div>
  </div>
);
