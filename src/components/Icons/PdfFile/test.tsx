import React from 'react';

import { render } from '@testing-library/react';

import { PdfFile } from '.';

describe('PdfFile', () => {
  test('should match snapshot', () => {
    const { container } = render(<PdfFile />);

    expect(container).toMatchSnapshot();
  });
});
