import React, { useEffect, useState } from 'react';

import { faker } from '@faker-js/faker';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextField } from './index';
import { Props, Value } from './type';

export default {
  argTypes: {
    icon: { control: { type: 'text' } },
    size: { defaultValue: 'medium' },
    value: { control: { type: 'text' } },
  },
  component: TextField,
  title: 'Components/TextField',
} as ComponentMeta<typeof TextField>;

const defaultArgs: Props = {
  disabled: false,
  errorDescription: 'Text example of field error',
  hasError: false,
  label: 'Label',
  name: '',
  onChange: () => {},
  placeholder: 'Insert text here',
  required: false,
  value: 'Input value',
};

const Template: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState<Value>('Lorem Ipsum amet');

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <TextField
      {...args}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
    />
  );
};

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

export const Placeholder = Template.bind({});

Placeholder.args = {
  ...defaultArgs,
  value: '',
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...defaultArgs,
  disabled: true,
};

export const TooltipInfo = Template.bind({});

TooltipInfo.args = {
  ...defaultArgs,
  infoDescription: faker.lorem.paragraph(2),
};

export const Required = Template.bind({});

Required.args = {
  ...defaultArgs,
  required: true,
};
