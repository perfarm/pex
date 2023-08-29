import React from 'react';

import { render } from '@testing-library/react';

import { AngleDown } from '.';

describe('AngleDown', () => {
  test('should match snapshot', () => {
    const { container } = render(<AngleDown />);

    expect(container).toMatchSnapshot();
  });
});
