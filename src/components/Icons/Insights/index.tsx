import { FC } from 'react';
import { theme } from '~/theme';
import { PropsIcon } from '../types';

export const Insights: FC<PropsIcon> = ({ color = 'mediumGray', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.75 21.75H16.25M13.2615 5.32354C14.1788 5.47948 15.0251 5.9164 15.6835 6.57396C16.3419 7.23153 16.7798 8.0773 16.9369 8.99446M7.87847 15.6574C6.98667 14.9608 6.26435 14.0712 5.76581 13.0554C5.26727 12.0396 5.00548 10.9239 5.00011 9.79237C4.97765 5.72715 8.255 2.34783 12.3192 2.25217C13.894 2.21425 15.4409 2.67317 16.7402 3.56384C18.0396 4.45451 19.0256 5.73169 19.5582 7.21424C20.0909 8.69678 20.1432 10.3094 19.7078 11.8234C19.2724 13.3373 18.3713 14.6758 17.1324 15.6488C16.8596 15.8602 16.6383 16.1309 16.4854 16.4404C16.3326 16.7499 16.2521 17.0901 16.25 17.4353L16.25 18.0001C16.25 18.199 16.171 18.3897 16.0303 18.5304C15.8897 18.671 15.6989 18.75 15.5 18.75H9.49999C9.30108 18.75 9.11031 18.671 8.96966 18.5304C8.82901 18.3897 8.74999 18.199 8.74999 18.0001L8.74998 17.4346C8.74912 17.0917 8.67021 16.7534 8.51921 16.4455C8.36822 16.1376 8.1491 15.868 7.87847 15.6574Z"
      stroke={theme.colors[color].value}
      strokeWidth="1.5"
    />
  </svg>
);
