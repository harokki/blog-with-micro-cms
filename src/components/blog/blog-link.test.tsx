import React from 'react';
import { render, screen } from '@testing-library/react';
import { BlogResponse } from 'domains/microCMS/models/blog';
import { BlogLink } from './blog-link';

describe('BlogLink', () => {
  it('externalUrlが設定されていない場合hrefにblog.idが使われていること', () => {
    const blog: BlogResponse = {
      id: 'idtest',
      title: 'title',
      body: 'body',
      externalUrl: null,
      createdAt: '2021-5-21',
      updatedAt: '2021-5-21',
      publishedAt: '2021-5-21',
      revisedAt: '2021-5-21',
    };
    render(<BlogLink blog={blog} />);
    expect(screen.getByText('title').closest('a')).toHaveAttribute(
      'href',
      '/blog/idtest',
    );
  });

  it('externalUrlが設定されている場合hrefの値がexternalUrlになっていること', () => {
    const externalUrl = 'https://dummy.com/dummyid';
    const blog: BlogResponse = {
      id: 'id',
      title: 'title',
      body: 'body',
      externalUrl,
      createdAt: '2021-5-21',
      updatedAt: '2021-5-21',
      publishedAt: '2021-5-21',
      revisedAt: '2021-5-21',
    };
    render(<BlogLink blog={blog} />);
    expect(screen.getByText('title').closest('a')).toHaveAttribute(
      'href',
      externalUrl,
    );
  });
});
