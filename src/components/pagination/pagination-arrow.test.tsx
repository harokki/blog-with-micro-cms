import React from 'react';
import { render, screen } from '@testing-library/react';
import { PaginationArrow } from './pagination-arrow';

describe('PaginationArrow', () => {
  it('最大ページ数が1で現在ページが1の場合ページ送りが表示されないこと', () => {
    render(<PaginationArrow maxPageNumber={1} currentPageNumber={1} />);

    expect(screen.queryByTestId('previous')).toBeFalsy();
    expect(screen.queryByTestId('next')).toBeFalsy();
  });

  it('最大ページ数が2で現在ページが1の場合次ページへのリンクが表示されること', () => {
    render(<PaginationArrow maxPageNumber={2} currentPageNumber={1} />);

    expect(screen.queryByTestId('previous')).toBeFalsy();
    expect(screen.getByTestId('next').closest('a')).toHaveAttribute(
      'href',
      '/blog/page/2',
    );
  });

  it('最大ページ数が3で現在ページが2の場合前・次ページへのリンクが表示されること', () => {
    render(<PaginationArrow maxPageNumber={3} currentPageNumber={2} />);

    expect(screen.getByTestId('previous').closest('a')).toHaveAttribute(
      'href',
      '/blog/page/1',
    );
    expect(screen.getByTestId('next').closest('a')).toHaveAttribute(
      'href',
      '/blog/page/3',
    );
  });

  it('最大ページ数が3で現在ページが3の場合前ページへのリンクが表示されること', () => {
    render(<PaginationArrow maxPageNumber={3} currentPageNumber={3} />);

    expect(screen.getByTestId('previous').closest('a')).toHaveAttribute(
      'href',
      '/blog/page/2',
    );
    expect(screen.queryByTestId('next')).toBeFalsy();
  });
});
