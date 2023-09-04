import { FC } from 'react';

import { Root } from './style';
import { Props } from './types';

export const Card: FC<Props> = ({ children, className, style, onClick }) => (
  <Root className={className} style={style} onClick={onClick}>
    {children}
  </Root>
);
