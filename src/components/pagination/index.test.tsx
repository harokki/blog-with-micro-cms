import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from './index';

describe('Pagination', () => {
  it('totalCountに合わせたページネーションが表示されること(キリ番)', () => {
    render(<Pagination totalCount={20} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.queryByText('5')).toBeFalsy();
  });

  it('totalCountに合わせたページネーションが表示されること', () => {
    render(<Pagination totalCount={22} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.queryByText('6')).toBeFalsy();
  });

  it('totalCount=0の時ページネーションが表示されないこと', () => {
    render(<Pagination totalCount={0} />);

    expect(screen.queryByText('1')).toBeFalsy();
  });

  it('totalCount=1の時ページネーションが表示されること', () => {
    render(<Pagination totalCount={1} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).toBeFalsy();
  });
});
