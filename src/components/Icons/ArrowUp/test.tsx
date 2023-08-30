import React from 'react';

import { render } from '@testing-library/react';

import { ArrowUp } from '.';

describe('ArrowUp', () => {
  test('should match snapshot', () => {
    const { container } = render(<ArrowUp />);

    expect(container).toMatchSnapshot();
  });
});
