import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Loader } from '.';
import { Props } from './types';

export default {
  component: Loader,
  title: 'Components/Text',
} as Meta<Props>;

const Template: StoryFn<Props> = (args) => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Digite aqui',
  text: 'Meu Texto',
};
