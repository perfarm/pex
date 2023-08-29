import React from 'react';

import { render } from '@testing-library/react';

import { ArrowClockwise } from '.';

describe('ArrowClockwise', () => {
  test('should match snapshot', () => {
    const { container } = render(<ArrowClockwise />);

    expect(container).toMatchSnapshot();
  });
});
