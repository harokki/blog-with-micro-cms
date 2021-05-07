import { BlogResponse, isBlogResponse } from '../models/blog';
import { api } from './config';

export const getBlog = async (id: string): Promise<BlogResponse> => {
  const response = await api.get(`blog/${id}`);
  const blogResponse = (await response.json()) as unknown;

  if (!isBlogResponse(blogResponse)) {
    throw Error('API type error');
  }

  return blogResponse;
};
