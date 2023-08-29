import { ChangeEventHandler } from 'react';

import { OwnProps as InputRootProps } from '~/components/InputRoot/type';

export type InputType = 'email' | 'password' | 'search' | 'tel' | 'text' | 'number' | 'url';

export type Value = string | number;
export interface OwnProps {
  maxLength?: number;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: InputType;
  value?: Value;
}

export type Props = InputRootProps & OwnProps;
