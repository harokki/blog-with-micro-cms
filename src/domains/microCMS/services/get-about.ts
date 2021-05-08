import { AboutResponse, isAboutResponse } from '../models/about';
import { api } from './config';

export const getAbout = async (id: string): Promise<AboutResponse> => {
  const response = await api.get(`about/${id}`);
  const aboutResponse = (await response.json()) as unknown;

  if (!isAboutResponse(aboutResponse)) {
    throw Error('API type error');
  }

  return aboutResponse;
};
