import React, { FC } from 'react';

import { theme } from '~/theme';

import { Path, Root } from './style';
import { Props } from './types';

export const AngleUp: FC<Props> = ({ className, color = 'gray', size = 18 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M4.5 15L12 7.5L19.5 15" stroke={theme.colors[color].value} strokeLinecap="round" strokeLinejoin="round" />
  </Root>
);
