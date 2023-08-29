import React from 'react';

import { render } from '@testing-library/react';

import { Cattle } from '.';

describe('Cattle', () => {
  test('should match snapshot', () => {
    const { container } = render(<Cattle />);

    expect(container).toMatchSnapshot();
  });
});
