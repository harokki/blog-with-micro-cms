import { isCategoryResponses, isCategoryResponse } from './category';

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
});
