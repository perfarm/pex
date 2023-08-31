import { FC } from 'react';

import { Path, Root } from '~/commons/variants/svgIcon';
import { PropsIcon } from '~/components/Icons/types';
import { theme } from '~/theme';

export const CaretLeft: FC<PropsIcon> = ({ className, color = 'gray', size = 180 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M15 19.5L7.5 12L15 4.51"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Root>
);
