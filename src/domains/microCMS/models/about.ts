import { ContentResponse, ListContentsResponse } from './api';

export type AboutListResponse = ListContentsResponse<AboutResponse>;

export type AboutResponse = ContentResponse<{
  title?: string;
  body?: string;
}>;

export const isAboutResponse = (arg: unknown): arg is AboutResponse => {
  const m = arg as AboutResponse;

  return typeof m?.title === 'string' && typeof m?.body === 'string';
};

export const isAboutResponses = (args: unknown[]): args is AboutResponse[] =>
  !args.some((arg) => !isAboutResponse(arg));

export const isAboutListResponse = (arg: unknown): arg is AboutListResponse => {
  const m = arg as AboutListResponse;

  return (
    isAboutResponses(m?.contents) &&
    typeof m?.totalCount === 'number' &&
    typeof m?.offset === 'number' &&
    typeof m?.limit === 'number'
  );
};
