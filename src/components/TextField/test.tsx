import React from 'react';

import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextField } from '.';

const mockRandomValues = () => {
  const mockFn = jest.fn();
  const label = faker.name.prefix();
  const tagName = faker.name.suffix();
  const icon = faker.name.jobArea();
  const errorDescription = faker.lorem.words(6);
  const value = faker.name.fullName();
  const valueChanged = faker.name.fullName();

  return { errorDescription, icon, label, mockFn, tagName, value, valueChanged };
};

describe('TextField', () => {
  test('should call mockFn with valueChanged when user type', () => {
    const { mockFn, tagName, valueChanged } = mockRandomValues();
    render(<TextField name={tagName} onChange={(e) => mockFn(e.target.value)} />);

    const inputElement = document.getElementById(`textfield-${tagName}`) as HTMLInputElement;

    userEvent.type(inputElement, valueChanged);

    expect(mockFn).toHaveBeenCalledWith(valueChanged);
  });

  test('should disabled input and not call event', () => {
    const { mockFn, tagName, value, valueChanged } = mockRandomValues();
    render(<TextField disabled name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const inputElement = document.getElementById(`textfield-${tagName}`) as HTMLInputElement;

    expect(inputElement).toBeDisabled();
    expect(inputElement.value).toBe(value);

    userEvent.type(inputElement, valueChanged);

    expect(mockFn).not.toBeCalled();
  });

  test('should show icon element', () => {
    const { icon, mockFn, tagName, value } = mockRandomValues();
    render(<TextField icon={icon} name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const iconElement = screen.queryByText(icon);

    expect(iconElement).toBeInTheDocument();
  });

  test('should show label element', () => {
    const { label, mockFn, tagName, value } = mockRandomValues();
    render(<TextField label={label} name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const labelElement = screen.queryByText(label);

    expect(labelElement).toBeInTheDocument();
  });

  test('should show error element and message', () => {
    const { errorDescription, mockFn, tagName, value } = mockRandomValues();
    render(
      <TextField
        errorDescription={errorDescription}
        hasError
        name={tagName}
        onChange={(e) => mockFn(e.target.value)}
        value={value}
      />
    );

    const errorElement = document.getElementById(`textfield-${tagName}-error`) as HTMLInputElement;

    expect(errorElement).toBeInTheDocument();
    expect(screen.queryByText(errorDescription)).toBeInTheDocument();
  });

  test('should not show error message when error is false and have errorDescription', () => {
    const { errorDescription, mockFn, tagName, value } = mockRandomValues();
    render(
      <TextField
        errorDescription={errorDescription}
        name={tagName}
        onChange={(e) => mockFn(e.target.value)}
        value={value}
      />
    );

    expect(screen.queryByText(errorDescription)).not.toBeInTheDocument();
  });

  test('should not show errorElement when hasError is true and errorDescription is empty', () => {
    const { mockFn, tagName, value } = mockRandomValues();
    render(<TextField hasError name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const errorElement = document.getElementById(`textfield-${tagName}-error`) as HTMLInputElement;

    expect(errorElement).not.toBeInTheDocument();
  });
});
