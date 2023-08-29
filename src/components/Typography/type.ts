import { PropsWithChildren } from 'react';

import { Colors } from '~/commons/types';
import { FontSizes, FontWeight, HtmlTextTags } from '~/commons/types/typography';

export type VariantTags = {
  [key in FontSizes]: keyof JSX.IntrinsicElements;
};

export interface Props extends PropsWithChildren {
  className?: string;
  color?: Colors;
  tag?: HtmlTextTags;
  variant?: FontSizes;
  weight?: FontWeight;
}
