import { ContentResponse, ListContentsResponse } from './api';

export type CategoryListResponse = ListContentsResponse<CategoryResponse>;

export type CategoryResponse = ContentResponse<{
  name?: string;
}>;

export const isCategoryResponse = (arg: unknown): arg is CategoryResponse => {
  const m = arg as CategoryResponse;

  return typeof m?.name === 'string';
};

export const isCategoryResponses = (
  args: unknown[],
): args is CategoryResponse[] => !args.some((arg) => !isCategoryResponse(arg));

export const isCategoryListResponse = (
  arg: unknown,
): arg is CategoryListResponse => {
  const m = arg as CategoryListResponse;

  return (
    isCategoryResponses(m?.contents) &&
    typeof m?.totalCount === 'number' &&
    typeof m?.offset === 'number' &&
    typeof m?.limit === 'number'
  );
};
