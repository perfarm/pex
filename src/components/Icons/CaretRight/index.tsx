import React, { FC } from 'react';

import { Path, Root } from '~/commons/variants/svgIcon';
import { theme } from '~/theme';

import { Props } from './types';

export const CaretRight: FC<Props> = ({ className, color = 'gray', size = 18 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9 4.5L16.5 12L9 19.5"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Root>
);
