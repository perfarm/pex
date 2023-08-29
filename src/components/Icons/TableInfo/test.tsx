import React from 'react';

import { render } from '@testing-library/react';

import { TableInfo } from '.';

describe('TableInfo', () => {
  test('should match snapshot', () => {
    const { container } = render(<TableInfo />);

    expect(container).toMatchSnapshot();
  });
});
