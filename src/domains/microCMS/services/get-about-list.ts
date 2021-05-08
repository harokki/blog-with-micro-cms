import { AboutListResponse, isAboutListResponse } from '../models/about';
import { api } from './config';

export const getAboutList = async (): Promise<AboutListResponse> => {
  const response = await api.get('about');
  const aboutListResponse = (await response.json()) as unknown;

  if (!isAboutListResponse(aboutListResponse)) {
    throw Error('API type error');
  }

  return aboutListResponse;
};
