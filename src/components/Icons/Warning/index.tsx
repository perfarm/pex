import React, { FC } from 'react';

import { theme } from '~/theme';

import { Path, Root } from './style';
import { Props } from './types';

export const Warning: FC<Props> = ({ className, color = 'gray', size = 18 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M11.9997 9.75V13.5M10.7015 3.74857L2.45374 17.9978C2.32177 18.2259 2.25217 18.4846 2.25195 18.748C2.25174 19.0115 2.32091 19.2703 2.4525 19.4986C2.5841 19.7268 2.77348 19.9163 3.0016 20.0481C3.22971 20.1799 3.48851 20.2493 3.75196 20.2493H20.2475C20.5109 20.2493 20.7697 20.1799 20.9979 20.0481C21.226 19.9163 21.4154 19.7268 21.547 19.4986C21.6786 19.2703 21.7477 19.0115 21.7475 18.748C21.7473 18.4846 21.6777 18.2258 21.5457 17.9978L13.2979 3.74857C13.1662 3.52093 12.9769 3.33193 12.749 3.20055C12.5212 3.06916 12.2628 3 11.9997 3C11.7367 3 11.4783 3.06916 11.2504 3.20055C11.0226 3.33193 10.8333 3.52093 10.7015 3.74857Z"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <Path
      d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z"
      fill={theme.colors[color].value}
    />
  </Root>
);
