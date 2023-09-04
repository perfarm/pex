import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
  name: string;
  image: string;
}
