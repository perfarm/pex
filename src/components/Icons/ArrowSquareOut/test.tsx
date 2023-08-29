import React from 'react';

import { render } from '@testing-library/react';

import { ArrowSquareOut } from '.';

describe('ArrowSquareOut', () => {
  test('should match snapshot', () => {
    const { container } = render(<ArrowSquareOut />);

    expect(container).toMatchSnapshot();
  });
});
