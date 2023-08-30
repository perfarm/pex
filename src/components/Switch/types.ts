import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';
import { ReactNode } from 'react';

export interface Props {
  checked: RadixSwitchProps['checked'];
  className?: string;
  disabled?: boolean;
  id: string;
  label: string | ReactNode;
  onChange: RadixSwitchProps['onCheckedChange'];
}
