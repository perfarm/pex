import React from 'react';

import { render } from '@testing-library/react';

import { HourglassMedium } from '.';

describe('HourglassMedium', () => {
  test('should match snapshot', () => {
    const { container } = render(<HourglassMedium />);

    expect(container).toMatchSnapshot();
  });
});
