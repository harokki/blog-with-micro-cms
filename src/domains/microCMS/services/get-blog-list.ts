import { PER_PAGE } from 'index';
import { BlogListResponse, isBlogListResponse } from '../models/blog';
import { api } from './config';

export const getBlogList = async (
  offset = 0,
  limit: number = PER_PAGE,
): Promise<BlogListResponse> => {
  const response = await api.get('blog', {
    searchParams: {
      offset,
      limit,
    },
  });
  const blogListResponse = (await response.json()) as unknown;

  if (!isBlogListResponse(blogListResponse)) {
    throw Error('API type error');
  }

  return blogListResponse;
};

export const getBlogListFilterByCategory = async (
  category: string,
): Promise<BlogListResponse> => {
  const response = await api.get('blog', {
    searchParams: {
      filters: `categories[contains]${category}`,
    },
  });
  const blogListResponse = (await response.json()) as unknown;

  if (!isBlogListResponse(blogListResponse)) {
    throw Error('API type error');
  }

  return blogListResponse;
};
