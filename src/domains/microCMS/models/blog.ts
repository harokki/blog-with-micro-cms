import { ContentResponse, ListContentsResponse } from './api';
import { CategoryResponse, isCategoryResponses } from './category';

export type BlogListResponse = ListContentsResponse<BlogResponse>;

export type BlogResponse = ContentResponse<{
  title?: string;
  body?: string;
  categories?: CategoryResponse[];
}>;

export const isBlogResponse = (arg: unknown): arg is BlogResponse => {
  const m = arg as BlogResponse;

  return (
    typeof m?.title === 'string' &&
    typeof m?.body === 'string' &&
    isCategoryResponses(m?.categories || [])
  );
};

export const isBlogResponses = (args: unknown[]): args is BlogResponse[] =>
  !args.some((arg) => !isBlogResponse(arg));

export const isBlogListResponse = (arg: unknown): arg is BlogListResponse => {
  const m = arg as BlogListResponse;

  return (
    isBlogResponses(m?.contents) &&
    typeof m?.totalCount === 'number' &&
    typeof m?.offset === 'number' &&
    typeof m?.limit === 'number'
  );
};
