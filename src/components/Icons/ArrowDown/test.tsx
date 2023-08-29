import React from 'react';

import { render } from '@testing-library/react';

import { ArrowDown } from '.';

describe('ArrowDown', () => {
  test('should match snapshot', () => {
    const { container } = render(<ArrowDown />);

    expect(container).toMatchSnapshot();
  });
});
