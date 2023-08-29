import React from 'react';

import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';

import { Typography } from '.';

const mockRandomValues = () => {
  const childrenText = faker.lorem.words(3);

  return { childrenText };
};

describe('Typography', () => {
  test('should show childrenText', () => {
    const { childrenText } = mockRandomValues();
    render(<Typography>{childrenText}</Typography>);

    expect(screen.queryByText(childrenText)).toBeTruthy();
  });

  test('should use html tag by variant', () => {
    const { childrenText } = mockRandomValues();
    render(<Typography variant="$display1">{childrenText}</Typography>);

    const element = screen.queryByText(childrenText);

    expect(element.tagName).toBe('H1');
  });

  test('should change variant html tag', () => {
    const { childrenText } = mockRandomValues();
    render(
      <Typography tag="h3" variant="$display1">
        {childrenText}
      </Typography>
    );

    const element = screen.queryByText(childrenText);

    expect(element.tagName).toBe('H3');
  });
});
