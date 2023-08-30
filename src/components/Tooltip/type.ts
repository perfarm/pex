import { PropsWithChildren } from 'react';

import { Align, Side } from '@radix-ui/react-popper/dist';

type TooltipColor = 'primary' | 'secondary' | 'white' | 'black';
type TooltipMaxHeight = 'small' | 'medium' | 'large';
export type TooltipAlign = Align;
export type TooltipSide = Side;

interface TooltipProps {
  align?: TooltipAlign;
  color?: TooltipColor;
  delay?: number;
  description: string | JSX.Element;
  isBodyChild?: boolean;
  isOpen?: boolean;
  maxHeight?: TooltipMaxHeight;
  side?: TooltipSide;
}

export type Props = PropsWithChildren<TooltipProps>;
