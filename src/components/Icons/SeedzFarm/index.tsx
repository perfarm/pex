import { FC } from 'react';
import { theme } from '~/theme';
import { PropsIcon } from '../types';

export const SeedzFarm: FC<PropsIcon> = ({ color = 'mediumGray', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.8333 8.99994L4.58325 20.2499M6.83325 17.9999C2.33325 10.4999 8.33325 2.99994 21.0833 3.74994C21.8333 16.4999 14.3333 22.4999 6.83325 17.9999Z"
      stroke={theme.colors[color].value}
      strokeWidth="1.5"
    />
  </svg>
);
