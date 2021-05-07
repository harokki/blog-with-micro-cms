import ky from 'ky';

export const api = ky.create({
  prefixUrl: process.env.API_ENDPOINT,
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set('X-Requested-With', 'ky');
        request.headers.set('X-API-KEY', process.env.API_KEY as string);
      },
    ],
  },
});
