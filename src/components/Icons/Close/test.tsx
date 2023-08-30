import React from 'react';

import { render } from '@testing-library/react';

import { Close } from '.';

describe('Close', () => {
  test('should match snapshot', () => {
    const { container } = render(<Close />);

    expect(container).toMatchSnapshot();
  });
});
