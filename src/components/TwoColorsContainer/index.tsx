import { FC } from 'react';

import { TwoColorsContainer as TwoColorsContainerComponent } from './style';
import { Props } from './types';

export const TwoColorsContainer: FC<Props> = ({ className, children }) => (
  <TwoColorsContainerComponent className={className}>{children}</TwoColorsContainerComponent>
);
