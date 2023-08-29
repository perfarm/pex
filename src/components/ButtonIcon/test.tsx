import React from 'react';

import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Info } from '~/components/Icons';

import { ButtonIcon } from '.';

describe('ButtonIcon', () => {
  test('should check if has icon inside button', () => {
    const className = faker.lorem.slug();
    const handleClick = jest.fn();

    const { container } = render(
      <ButtonIcon color="gray" onClick={handleClick} variant="text">
        <Info className={className} />
      </ButtonIcon>
    );

    const [icon] = container.getElementsByClassName(className);

    expect(icon).toBeDefined();
  });

  test('should call handleClick on click icon', () => {
    const className = faker.lorem.slug();
    const handleClick = jest.fn();

    const { container } = render(
      <ButtonIcon color="gray" onClick={handleClick} variant="text">
        <Info className={className} />
      </ButtonIcon>
    );

    const [icon] = container.getElementsByClassName(className);

    userEvent.click(icon);

    expect(handleClick).toBeCalledTimes(1);
  });
});
