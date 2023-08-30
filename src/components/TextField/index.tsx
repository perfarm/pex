import React, { FC } from 'react';

import { InputRoot } from '~/components/InputRoot';

import { Input } from './style';
import { Props } from './type';

export const TextField: FC<Props> = (props) => {
  const id = `textfield-${props.name}`;

  return (
    <InputRoot {...props} elementId={id}>
      <Input
        disabled={props.disabled}
        id={id}
        maxLength={props.maxLength}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.required}
        size={props.size}
        type={props.type}
        value={props.value}
      />
    </InputRoot>
  );
};
