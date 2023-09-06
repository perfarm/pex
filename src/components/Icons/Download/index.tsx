import { FC } from 'react';

import { theme } from '~/theme';

import { Props } from './types';

export const Download: FC<Props> = ({ color = 'white', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25M8.0625 10.3135L12 14.25L15.9375 10.3135M12 3.75V14.2472"
      stroke={theme.colors[color].value}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
