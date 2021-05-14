import { BlogListResponse, isBlogListResponse } from '../models/blog';
import { api } from './config';

export const getBlogList = async (): Promise<BlogListResponse> => {
  const response = await api.get('blog');
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
