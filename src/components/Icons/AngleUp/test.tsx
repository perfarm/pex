import React from 'react';

import { render } from '@testing-library/react';

import { AngleUp } from '.';

describe('AngleUp', () => {
  test('should match snapshot', () => {
    const { container } = render(<AngleUp />);

    expect(container).toMatchSnapshot();
  });
});
