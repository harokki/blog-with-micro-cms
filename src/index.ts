import { ParsedUrlQuery } from 'querystring';

// Your site name
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Demo Site';
// Your footer copy name
export const footerCopy = process.env.NEXT_PUBLIC_FOOTER_COPY || 'demo';
// BLOG ITEM PER PAGE
export const PER_PAGE = 5;

export type ContextParams = {
  id: string;
} & ParsedUrlQuery;
