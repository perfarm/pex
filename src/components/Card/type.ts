import { PropsWithChildren } from 'react';

export interface OwnProps {
  className?: string;
}

export type Props = PropsWithChildren<OwnProps>;
