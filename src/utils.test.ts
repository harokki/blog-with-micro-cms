import { bodyToDescription, range } from 'utils';

describe('utilsのテスト', () => {
  it('blogのbodyからタグを除去しdescriptionに変換する', () => {
    expect(bodyToDescription('<p>こんにちは</p>', 5)).toBe('こんにちは');
  });

  describe('range', () => {
    it('start=1,end=4の場合[1,2,3,4]が返ってくること', () => {
      expect(range(1, 4)).toStrictEqual([1, 2, 3, 4]);
    });
    it('start=2,end=4の場合[2,3,4]が返ってくること', () => {
      expect(range(2, 4)).toStrictEqual([2, 3, 4]);
    });
    it('start=1,end=1の場合[1]が返ってくること', () => {
      expect(range(1, 1)).toStrictEqual([1]);
    });
    it('endの方が小さい場合[]が返ってくること', () => {
      expect(range(1, 0)).toStrictEqual([]);
      expect(range(3, 1)).toStrictEqual([]);
    });
  });
});
