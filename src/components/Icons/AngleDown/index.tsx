import React, { FC } from 'react';

import { theme } from '~/theme';

import { Path, Root } from './style';
import { Props } from './types';

export const AngleDown: FC<Props> = ({ className, color = 'gray', size = 18 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M19.5 9L12 16.5L4.5 9"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Root>
);
