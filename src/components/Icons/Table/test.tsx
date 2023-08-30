import React from 'react';

import { render } from '@testing-library/react';

import { Table } from '.';

describe('Table', () => {
  test('should match snapshot', () => {
    const { container } = render(<Table />);

    expect(container).toMatchSnapshot();
  });
});