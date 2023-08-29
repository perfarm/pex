import React, { FC } from 'react';

import { theme } from '~/theme';

import { Path, Root } from './style';
import { Props } from './types';

export const ArrowUp: FC<Props> = ({ className, color = 'gray', size = 18 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 16 18"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M8.19922 17.25V0.75M8.19922 0.75L1.44922 7.5M8.19922 0.75L14.9492 7.5"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Root>
);
