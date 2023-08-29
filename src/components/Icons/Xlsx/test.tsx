import React from 'react';

import { render } from '@testing-library/react';

import { Xlsx } from '.';

describe('Xlsx', () => {
  test('should be render icon', () => {
    const { container } = render(<Xlsx />);

    expect(container).toMatchSnapshot();
  });
});
