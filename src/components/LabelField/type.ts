import { PropsWithChildren } from 'react';

import { CommonSize } from '~/commons/types';
import { Props as TooltipProps } from '~/components/Tooltip/type';

export interface OwnProps {
  className?: string;
  elementId?: string;
  optionalDescription?: string;
  required?: boolean;
  size?: CommonSize;
  tooltipDescription?: TooltipProps['description'];
  tooltipIcon?: JSX.Element;
}

export type Props = PropsWithChildren<OwnProps>;
