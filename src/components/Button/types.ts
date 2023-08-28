import { PropsWithChildren } from 'react';

export type ButtonColor = 'primary' | 'secondary' | 'error' | 'white' | 'black' | 'gray';
export type ButtonSize = 'xsm' | 'xxsm' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export interface Props extends PropsWithChildren {
  className?: string;
  color: ButtonColor;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
  variant?: ButtonVariant;
}
