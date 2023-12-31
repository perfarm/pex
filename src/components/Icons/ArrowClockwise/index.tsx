import React, { FC } from 'react';

import { theme } from '~/theme';

import { Path, Root } from './style';
import { Props } from './types';

export const ArrowClockwise: FC<Props> = ({ className, color = 'gray', size = 18 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 20 20"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      clipRule="evenodd"
      d="M13.763 7.79032H17.513M17.513 7.79032V4.04032M17.513 7.79032L14.8614 5.13864C13.8999 4.17716 12.6749 3.52238 11.3412 3.2571C10.0076 2.99183 8.62529 3.12798 7.36905 3.64833C6.11281 4.16868 5.03908 5.04987 4.28365 6.18046C3.52821 7.31105 3.125 8.64026 3.125 10C3.125 11.3597 3.52821 12.689 4.28365 13.8195C5.03908 14.9501 6.11281 15.8313 7.36905 16.3517C8.62529 16.872 10.0076 17.0082 11.3412 16.7429C12.6749 16.4776 13.8999 15.8228 14.8614 14.8614"
      fillRule="evenodd"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Root>
);
