import { bodyToDescription } from 'utils';

describe('utilsのテスト', () => {
  it('blogのbodyからタグを除去しdescriptionに変換する', () => {
    expect(bodyToDescription('<p>こんにちは</p>', 5)).toBe('こんにちは');
  });
});
