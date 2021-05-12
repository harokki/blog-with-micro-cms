import { isBlogListResponse, isBlogResponse, isBlogResponses } from './blog';

describe('BlogResponse model', () => {
  it('isBlogResponse is true', () => {
    expect(
      isBlogResponse({
        title: 'dummy',
        body: 'dummy',
        categories: [{ name: 'dummy' }],
      }),
    ).toBeTruthy();
  });

  it('isBlogResponse is false', () => {
    expect(
      isBlogResponse({ title: 3, body: 1, categories: [{ name: 2 }] }),
    ).toBeFalsy();
  });

  it('isBlogResponses is true', () => {
    expect(
      isBlogResponses([
        { title: 'dummy1', body: 'dummy1', categories: [{ name: 'dummy' }] },
        { title: 'dummy2', body: 'dummy2' },
      ]),
    ).toBeTruthy();
  });

  it('isBlogResponses is false', () => {
    expect(
      isBlogResponses([
        { title: 'dummy1', body: 'dummy1', categories: [{ name: 'dummy' }] },
        { title: 'dummy2', body: 2 },
      ]),
    ).toBeFalsy();
  });

  it('isBlogListResponse is true', () => {
    expect(
      isBlogListResponse({
        contents: [
          { title: 'dummy1', body: 'dummy1', categories: [{ name: 'dummy' }] },
          { title: 'dummy2', body: 'dummy2' },
        ],
        limit: 20,
        offset: 0,
        totalCount: 21,
      }),
    ).toBeTruthy();
  });

  it('isBlogListResponse is false', () => {
    expect(
      isBlogListResponse({
        contents: [
          { title: 'dummy1', body: 'dummy1', categories: [{ name: 'dummy' }] },
          { title: 'dummy2', body: 1 },
        ],
        limit: 20,
        offset: 0,
        totalCount: 21,
      }),
    ).toBeFalsy();
  });
});
