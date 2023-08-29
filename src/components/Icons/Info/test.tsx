import React from 'react';

import { render } from '@testing-library/react';

import { Info } from '.';

describe('Info', () => {
  test('should be render icon', () => {
    const { container } = render(<Info />);

    expect(container).toMatchSnapshot();
  });
});
