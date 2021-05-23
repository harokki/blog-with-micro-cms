import {
  CategoryListResponse,
  isCategoryListResponse,
} from '../models/category';
import { api } from './config';

const getCategoryCouont = async (): Promise<number> => {
  const response = await api.get('categories');
  const categoryListResponse = (await response.json()) as unknown;

  if (!isCategoryListResponse(categoryListResponse)) {
    throw Error('API type error');
  }

  return categoryListResponse.totalCount;
};

export const getAllCategories = async (): Promise<CategoryListResponse> => {
  const limit = await getCategoryCouont();
  const response = await api.get('categories', {
    searchParams: {
      limit,
    },
  });
  const categoryListResponse = (await response.json()) as unknown;

  if (!isCategoryListResponse(categoryListResponse)) {
    throw Error('API type error');
  }

  return categoryListResponse;
};

export const getCategoryNameById = async (id: string): Promise<string> => {
  const response = await api.get('categories', {
    searchParams: {
      filters: `id[equals]${id}`,
    },
  });
  const categoryListResponse = (await response.json()) as unknown;

  if (!isCategoryListResponse(categoryListResponse)) {
    throw Error('API type error');
  }

  return categoryListResponse.contents[0].name || '';
};
