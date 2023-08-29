import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  Black as RootBlack,
  Disabled as RootDisabled,
  Gray as RootGray,
  LG as RootLG,
  MD as RootMD,
  Primary as RootPrimary,
  Secondary as RootSecondary,
  SM as RootSM,
  White as RootWhite,
  XL as RootXL,
  XSM as RootXSM,
  XXSM as RootXXSM,
} from '~/components/Button/stories';
import { Info } from '~/components/Icons';

import { ButtonIcon } from '.';

export default {
  component: ButtonIcon,
  title: 'Components/ButtonIcon',
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

const children = <Info color="white" />;

export const Primary = Template.bind({});

Primary.args = {
  ...RootPrimary.args,
  children,
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...RootSecondary.args,
  children,
};

export const White = Template.bind({});

White.args = {
  ...RootWhite.args,
  children: <Info color="black" />,
};

export const Black = Template.bind({});

Black.args = {
  ...RootBlack.args,
  children,
};

export const Gray = Template.bind({});

Gray.args = {
  ...RootGray.args,
  children,
};

export const XXSM = Template.bind({});

XXSM.args = {
  ...RootXXSM.args,
  children,
};

export const XSM = Template.bind({});

XSM.args = {
  ...RootXSM.args,
  children,
};

export const SM = Template.bind({});

SM.args = {
  ...RootSM.args,
  children,
};

export const MD = Template.bind({});

MD.args = {
  ...RootMD.args,
  children,
};

export const LG = Template.bind({});

LG.args = {
  ...RootLG.args,
  children,
};

export const XL = Template.bind({});

XL.args = {
  ...RootXL.args,
  children,
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...RootDisabled.args,
  children,
};
