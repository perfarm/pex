import React, { FC } from 'react';

import { theme } from '~/theme';

import { Path, Root } from './style';
import { Props } from './types';

export const Info: FC<Props> = ({ className, color = 'gray', size = 18 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M11.25 11.25H12V16.5H12.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <Path
      d="M12 9C12.6213 9 13.125 8.49632 13.125 7.875C13.125 7.25368 12.6213 6.75 12 6.75C11.3787 6.75 10.875 7.25368 10.875 7.875C10.875 8.49632 11.3787 9 12 9Z"
      fill={theme.colors[color].value}
    />
  </Root>
);
