import { FC } from 'react';

import { Path, Root } from '~/commons/variants/svgIcon';
import { PropsIcon } from '~/components/Icons/types';
import { theme } from '~/theme';

export const ChatText: FC<PropsIcon> = ({ className, color = 'gray', size = 18 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.00012 13.5H15.0001M9.00012 10.5H15.0001M7.31118 18.876L4.23273 21.4638C4.1234 21.5557 3.99011 21.6145 3.84852 21.6332C3.70693 21.652 3.56293 21.6299 3.43347 21.5696C3.304 21.5093 3.19444 21.4133 3.11767 21.2928C3.0409 21.1724 3.00012 21.0325 3.00012 20.8897V6C3.00012 5.80109 3.07914 5.61032 3.21979 5.46967C3.36044 5.32902 3.55121 5.25 3.75012 5.25H20.2501C20.449 5.25 20.6398 5.32902 20.7805 5.46967C20.9211 5.61032 21.0001 5.80109 21.0001 6V18C21.0001 18.1989 20.9211 18.3897 20.7805 18.5303C20.6398 18.671 20.449 18.75 20.2501 18.75H7.65677L7.31118 18.876Z"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Root>
);
