import React from 'react';

import { render } from '@testing-library/react';

import { Warning } from '.';

describe('Warning', () => {
  test('should match snapshot', () => {
    const { container } = render(<Warning />);

    expect(container).toMatchSnapshot();
  });
});
