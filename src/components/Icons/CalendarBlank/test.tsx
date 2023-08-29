import React from 'react';

import { render } from '@testing-library/react';

import { CalendarBlank } from '.';

describe('CalendarBlank', () => {
  test('should match snapshot', () => {
    const { container } = render(<CalendarBlank />);

    expect(container).toMatchSnapshot();
  });
});
