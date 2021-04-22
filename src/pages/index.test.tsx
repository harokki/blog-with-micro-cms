import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from './index';

describe('indexのテスト', () => {
  it('表示の確認', () => {
    render(<Index />);

    expect(screen.getByText('hoge')).toBeInTheDocument();
  });
});
