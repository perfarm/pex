import React from 'react';

import { render } from '@testing-library/react';

import { ThumbsUp } from '.';

describe('ThumbsUp', () => {
  test('should match snapshot', () => {
    const { container } = render(<ThumbsUp />);

    expect(container).toMatchSnapshot();
  });
});
