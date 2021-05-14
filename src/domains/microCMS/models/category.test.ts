import {
  isCategoryResponses,
  isCategoryResponse,
  isCategoryListResponse,
} from './category';

describe('Category model', () => {
  it('isCategoryResponse is true', () => {
    expect(isCategoryResponse({ name: 'dummy' })).toBeTruthy();
  });

  it('isCategoryResponse is false', () => {
    expect(isCategoryResponse({ name: 3 })).toBeFalsy();
  });

  it('isCategoryResponses is true', () => {
    expect(
      isCategoryResponses([{ name: 'dummy1' }, { name: 'dummy2' }]),
    ).toBeTruthy();
  });

  it('isCategoryResponses is false', () => {
    expect(isCategoryResponses([{ name: 3 }, { name: 'dummy2' }])).toBeFalsy();
  });

  it('isCategoryListResponse is true', () => {
    expect(
      isCategoryListResponse({
        contents: [{ name: 'dummy1' }, { name: 'dummy2' }],
        limit: 20,
        offset: 0,
        totalCount: 21,
      }),
    ).toBeTruthy();
  });

  it('isCategoryListResponse is false', () => {
    expect(
      isCategoryListResponse({
        contents: [{ name: 'dummy1' }, { name: 3 }],
        limit: 20,
        offset: 0,
        totalCount: 21,
      }),
    ).toBeFalsy();
  });
});
