import React, { FC } from 'react';

import { theme } from '~/theme';

import { Path, Root } from './style';
import { Props } from './types';

export const ArrowDown: FC<Props> = ({ className, color = 'gray', size = 18 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 16 18"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M8.19922 0.75V17.25M8.19922 17.25L1.44922 10.5M8.19922 17.25L14.9492 10.5"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Root>
);
