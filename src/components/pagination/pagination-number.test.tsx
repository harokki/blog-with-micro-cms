import React from 'react';
import { render, screen } from '@testing-library/react';
import { PaginationNumber } from './pagination-number';

describe('PaginationNumber', () => {
  it('maxPageNumberに合わせたページネーションが表示されること(キリ番)', () => {
    render(<PaginationNumber maxPageNumber={4} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.queryByText('5')).toBeFalsy();
  });

  it('maxPageNumber=0の時ページネーションが表示されないこと', () => {
    render(<PaginationNumber maxPageNumber={0} />);

    expect(screen.queryByText('1')).toBeFalsy();
  });

  it('maxPageNumber=1の時ページネーションが表示されること', () => {
    render(<PaginationNumber maxPageNumber={1} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).toBeFalsy();
  });
});
