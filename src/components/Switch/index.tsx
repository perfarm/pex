import React, { FC } from 'react';

import { Label, Root, SwitchRoot, SwitchThumb } from './style';
import { Props } from './types';

export const Switch: FC<Props> = ({ checked, className, disabled, id, label, onChange }) => {
  return (
    <Root className={className}>
      <SwitchRoot checked={checked} disabled={disabled} id={id} onCheckedChange={onChange}>
        <SwitchThumb />
      </SwitchRoot>
      <Label htmlFor={id} title={label}>
        {label}
      </Label>
    </Root>
  );
};
