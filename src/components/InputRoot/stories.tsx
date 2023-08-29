import React from 'react';

import { faker } from '@faker-js/faker';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputRoot } from '.';
import { Props } from './type';

export default {
  argTypes: {
    icon: { control: { type: 'text' } },
    size: { defaultValue: 'medium' },
    value: { control: { type: 'text' } },
  },
  component: InputRoot,
  title: 'Components/InputRoot',
} as ComponentMeta<typeof InputRoot>;

const defaultArgs: Props = {
  children: faker.lorem.words(2),
  disabled: false,
  errorDescription: 'Text example of field error',
  hasError: false,
  label: 'Label',
};

const Template: ComponentStory<typeof InputRoot> = (args) => <InputRoot {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const Label = Template.bind({});

Label.args = {
  ...defaultArgs,
};

export const Error = Template.bind({});

Error.args = {
  ...defaultArgs,
  hasError: true,
};

export const Icon = Template.bind({});

Icon.args = {
  ...defaultArgs,
  icon: 'Field',
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...defaultArgs,
  disabled: true,
};
export const Required = Template.bind({});

Required.args = {
  ...defaultArgs,
  required: true,
};

export const Info = Template.bind({});

Info.args = {
  ...defaultArgs,
  infoDescription: faker.lorem.paragraph(2),
};
