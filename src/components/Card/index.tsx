import { FC } from 'react';

import { Root } from './style';
import { Props } from './types';

export const Card: FC<Props> = ({ children, className, style }) => (
  <Root className={className} style={style}>
    {children}
  </Root>
);
