import {
  isAboutListResponse,
  isAboutResponse,
  isAboutResponses,
} from './about';

describe('AboutResponse model', () => {
  it('isAboutResponse is true', () => {
    expect(isAboutResponse({ title: 'dummy', body: 'dummy' })).toBeTruthy();
  });

  it('isAboutResponse is false', () => {
    expect(isAboutResponse({ title: 3, body: 1 })).toBeFalsy();
  });

  it('isAboutResponses is true', () => {
    expect(
      isAboutResponses([
        { title: 'dummy1', body: 'dummy1' },
        { title: 'dummy2', body: 'dummy2' },
      ]),
    ).toBeTruthy();
  });

  it('isAboutResponses is false', () => {
    expect(
      isAboutResponses([
        { title: 'dummy1', body: 'dummy1' },
        { title: 'dummy2', body: 2 },
      ]),
    ).toBeFalsy();
  });

  it('isAboutListResponse is true', () => {
    expect(
      isAboutListResponse({
        contents: [
          { title: 'dummy1', body: 'dummy1' },
          { title: 'dummy2', body: 'dummy2' },
        ],
        limit: 20,
        offset: 0,
        totalCount: 21,
      }),
    ).toBeTruthy();
  });

  it('isAboutListResponse is false', () => {
    expect(
      isAboutListResponse({
        contents: [
          { title: 'dummy1', body: 'dummy1' },
          { title: 'dummy2', body: 1 },
        ],
        limit: 20,
        offset: 0,
        totalCount: 21,
      }),
    ).toBeFalsy();
  });
});
