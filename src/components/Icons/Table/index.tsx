import React, { FC } from 'react';

import { Path, Root } from '~/commons/variants/svgIcon';
import { theme } from '~/theme';

import { Props } from './types';

export const Table: FC<Props> = ({ className, color = 'gray', size = 18 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M3 14.25H21M8.25001 9.75V18.75M3 9.75H21M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Root>
);
