import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  className?: string;
  hasError?: boolean;
  onClick?: () => void;
  isActive?: boolean;
  name: string;
  description: string;
  image: string;
}
