import React from 'react';

import { faker } from '@faker-js/faker';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from './index';
import { Props } from './type';

export default {
  argTypes: {},
  component: Typography,
  title: 'Components/Typography',
} as ComponentMeta<typeof Typography>;

const defaultArgs: Props = {
  children: faker.lorem.paragraph(4),
};

const Template: ComponentStory<typeof Typography> = (args) => {
  return <Typography {...args} />;
};

export const Default = Template.bind({});

Default.args = defaultArgs;

export const Custom = Template.bind({});

Custom.args = {
  ...defaultArgs,
  color: '$pastureGreen',
  tag: 'h1',
  variant: '$body1',
  weight: '$normal',
};
