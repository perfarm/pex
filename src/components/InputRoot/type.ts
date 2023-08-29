import { PropsWithChildren } from 'react';

import { CommonSize } from '~/commons/types';

export interface OwnProps {
  className?: string;
  disabled?: boolean;
  elementId?: string;
  errorDescription?: string;
  hasError?: boolean;
  icon?: string | JSX.Element;
  infoDescription?: string | JSX.Element;
  label?: string;
  required?: boolean;
  size?: CommonSize;
}

export type Props = PropsWithChildren<OwnProps>;
