import React from 'react';

import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';

import { InputRoot } from '.';

const mockRandomValues = () => {
  const mockFn = jest.fn();
  const label = faker.name.prefix();
  const icon = faker.name.jobArea();
  const errorDescription = faker.lorem.words(6);
  const value = faker.name.fullName();
  const valueChanged = faker.name.fullName();
  const childrenText = faker.lorem.words(4);

  return { childrenText, errorDescription, icon, label, mockFn, value, valueChanged };
};

describe('InputRoot', () => {
  test('should show children element', () => {
    const { childrenText } = mockRandomValues();
    render(
      <InputRoot disabled>
        <div>{childrenText}</div>
      </InputRoot>
    );

    const childrenElement = screen.queryByText(childrenText) as HTMLElement;
    expect(childrenElement).toBeInTheDocument();
  });

  test('should show icon element', () => {
    const { childrenText, icon } = mockRandomValues();
    render(
      <InputRoot disabled icon={icon}>
        <div>{childrenText}</div>
      </InputRoot>
    );

    const iconElement = screen.queryByText(icon);
    expect(iconElement).toBeInTheDocument();
  });

  test('should show label element', () => {
    const { childrenText, label } = mockRandomValues();
    render(
      <InputRoot disabled label={label}>
        <div>{childrenText}</div>
      </InputRoot>
    );

    const labelElement = screen.queryByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  test('should show error element and message', () => {
    const { childrenText, errorDescription } = mockRandomValues();
    render(
      <InputRoot elementId="teste" errorDescription={errorDescription} hasError>
        <div>{childrenText}</div>
      </InputRoot>
    );

    const errorElement = document.getElementById(`teste-error`) as HTMLInputElement;

    expect(errorElement).toBeInTheDocument();
    expect(screen.queryByText(errorDescription)).toBeInTheDocument();
  });

  test('should not show error message when error is false and have errorDescription', () => {
    const { childrenText, errorDescription } = mockRandomValues();
    render(
      <InputRoot errorDescription={errorDescription}>
        <div>{childrenText}</div>
      </InputRoot>
    );

    expect(screen.queryByText(errorDescription)).not.toBeInTheDocument();
  });

  test('should not show errorElement when hasError is true and errorDescription is empty', () => {
    const { childrenText } = mockRandomValues();
    render(
      <InputRoot elementId="teste" hasError>
        <div>{childrenText}</div>
      </InputRoot>
    );

    const errorElement = document.getElementById(`teste-error`) as HTMLInputElement;

    expect(errorElement).not.toBeInTheDocument();
  });
});
