import React, { FC } from 'react';

import { theme } from '~/theme';

import { Path, Root } from './style';
import { Props } from './types';

export const HourglassMedium: FC<Props> = ({ className, color = 'gray', size = 18 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12 12L6.3 16.275C6.20685 16.3449 6.13125 16.4354 6.07918 16.5396C6.02711 16.6437 6 16.7586 6 16.875V20.25C6 20.4489 6.07902 20.6397 6.21967 20.7803C6.36032 20.921 6.55109 21 6.75 21H17.25C17.4489 21 17.6397 20.921 17.7803 20.7803C17.921 20.6397 18 20.4489 18 20.25V16.9086C18 16.7927 17.9731 16.6783 17.9215 16.5745C17.8698 16.4707 17.7948 16.3803 17.7023 16.3103L12 12ZM12 12V15.7496M12 12L6.3 7.725C6.20685 7.65514 6.13125 7.56455 6.07918 7.46041C6.02711 7.35627 6 7.24143 6 7.125V3.75C6 3.55109 6.07902 3.36032 6.21967 3.21967C6.36032 3.07902 6.55109 3 6.75 3H17.25C17.4489 3 17.6397 3.07902 17.7803 3.21967C17.921 3.36032 18 3.55109 18 3.75V7.09136C18 7.20732 17.9731 7.3217 17.9215 7.42551C17.8698 7.52932 17.7948 7.61974 17.7023 7.68966L12 12ZM6.99944 8.24958H16.9615"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Root>
);
