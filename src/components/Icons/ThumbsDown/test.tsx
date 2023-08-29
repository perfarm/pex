import React from 'react';

import { render } from '@testing-library/react';

import { ThumbsDown } from '.';

describe('ThumbsDown', () => {
  test('should match snapshot', () => {
    const { container } = render(<ThumbsDown />);

    expect(container).toMatchSnapshot();
  });
});
