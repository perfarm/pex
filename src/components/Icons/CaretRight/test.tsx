import React from 'react';

import { render } from '@testing-library/react';

import { CaretRight } from '.';

describe('CaretRight', () => {
  test('should match snapshot', () => {
    const { container } = render(<CaretRight />);

    expect(container).toMatchSnapshot();
  });
});
