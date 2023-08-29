import React, { FC } from 'react';

import { theme } from '~/theme';

import { Path, Root } from './style';
import { Props } from './types';

export const Xlsx: FC<Props> = ({ className, color = 'white', size = 20 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 20 20"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M2.5049 2.67527C2.46228 2.67527 2.42141 2.6922 2.39128 2.72234C2.36115 2.75247 2.34422 2.79334 2.34422 2.83595V11.9966C2.34422 12.3678 2.04331 12.6687 1.67211 12.6687C1.30091 12.6687 1 12.3678 1 11.9966V2.83595C1 2.43683 1.15855 2.05405 1.44077 1.77183C1.723 1.48961 2.10577 1.33105 2.5049 1.33105H12.4984C12.6766 1.33105 12.8476 1.40187 12.9736 1.52791L18.8031 7.35743C18.9292 7.48348 19 7.65443 19 7.83269V11.9966C19 12.3678 18.6991 12.6687 18.3279 12.6687C17.9567 12.6687 17.6558 12.3678 17.6558 11.9966V8.5048H12.4984C12.1272 8.5048 11.8263 8.20388 11.8263 7.83269V2.67527H2.5049ZM13.1705 3.62578L16.7053 7.16058H13.1705V3.62578Z"
      fill={theme.colors[color].value}
    />
    <Path
      d="M2.01536 13.7358C2.09023 13.7358 2.15882 13.7776 2.19313 13.8441L2.83481 15.0888C2.90929 15.2333 3.11587 15.2333 3.19035 15.0888L3.83203 13.8441C3.86634 13.7776 3.93493 13.7358 4.0098 13.7358H4.64241C4.7952 13.7358 4.89157 13.9002 4.81691 14.0335L3.6873 16.0507C3.65317 16.1117 3.65331 16.186 3.68768 16.2468L4.85013 18.3037C4.92548 18.437 4.82915 18.6021 4.67601 18.6021H4.03483C3.96024 18.6021 3.89185 18.5606 3.85742 18.4944L3.19 17.2118C3.11529 17.0682 2.90987 17.0682 2.83516 17.2118L2.16774 18.4944C2.13331 18.5606 2.06492 18.6021 1.99032 18.6021H1.34315C1.18992 18.6021 1.09361 18.4369 1.16913 18.3035L2.33405 16.247C2.36856 16.1861 2.3687 16.1116 2.33444 16.0505L1.20235 14.0337C1.12752 13.9004 1.22387 13.7358 1.37676 13.7358H2.01536Z"
      fill={theme.colors[color].value}
    />
    <Path
      d="M9.04365 17.82C9.15411 17.82 9.24365 17.9096 9.24365 18.02V18.4021C9.24365 18.5126 9.15411 18.6021 9.04365 18.6021H7.10203C6.99158 18.6021 6.90203 18.5126 6.90203 18.4021V18.02C6.90203 17.9096 6.99158 17.82 7.10203 17.82H9.04365ZM7.01191 13.7358C7.12236 13.7358 7.21191 13.8253 7.21191 13.9358V18.4021C7.21191 18.5126 7.12236 18.6021 7.01191 18.6021H6.45354C6.34308 18.6021 6.25354 18.5126 6.25354 18.4021V13.9358C6.25354 13.8253 6.34308 13.7358 6.45354 13.7358H7.01191Z"
      fill={theme.colors[color].value}
    />
    <Path
      d="M12.967 17.3287C12.967 17.2418 12.9542 17.1638 12.9287 17.0947C12.9052 17.0234 12.8605 16.9588 12.7945 16.9009C12.7285 16.8407 12.6358 16.7817 12.5166 16.7238C12.3973 16.6658 12.2429 16.6057 12.0533 16.5433C11.8425 16.472 11.6423 16.3918 11.4528 16.3026C11.2653 16.2135 11.0992 16.1099 10.9544 15.9918C10.8117 15.8715 10.6988 15.7322 10.6158 15.574C10.5349 15.4158 10.4944 15.232 10.4944 15.0226C10.4944 14.8198 10.537 14.636 10.6222 14.4711C10.7074 14.304 10.8266 14.1614 10.98 14.0433C11.1333 13.923 11.3143 13.8305 11.523 13.7659C11.7339 13.7013 11.965 13.6689 12.2163 13.6689C12.5591 13.6689 12.8584 13.7336 13.1139 13.8628C13.3695 13.992 13.5676 14.1692 13.7081 14.3942C13.8172 14.5662 13.8845 14.757 13.9103 14.9667C13.9237 15.0764 13.8326 15.1663 13.7222 15.1663H13.1702C13.0597 15.1663 12.9736 15.0755 12.9491 14.9678C12.9347 14.9046 12.913 14.846 12.8839 14.7919C12.8286 14.6828 12.7434 14.597 12.6284 14.5346C12.5155 14.4722 12.3728 14.441 12.2003 14.441C12.0342 14.441 11.8957 14.4677 11.785 14.5212C11.6743 14.5725 11.5912 14.6427 11.5358 14.7318C11.4804 14.8187 11.4528 14.9167 11.4528 15.0259C11.4528 15.1083 11.4719 15.183 11.5103 15.2498C11.5507 15.3167 11.6104 15.3791 11.6892 15.437C11.768 15.4949 11.8649 15.5495 11.9799 15.6008C12.0949 15.652 12.228 15.7021 12.3792 15.7512C12.6326 15.8314 12.8552 15.9216 13.0469 16.0219C13.2407 16.1222 13.4025 16.2347 13.5324 16.3595C13.6623 16.4842 13.7603 16.6257 13.8263 16.7839C13.8924 16.9421 13.9254 17.1215 13.9254 17.322C13.9254 17.5337 13.886 17.7231 13.8072 17.8902C13.7284 18.0573 13.6144 18.1988 13.4653 18.3147C13.3163 18.4305 13.1384 18.5185 12.9318 18.5787C12.7253 18.6389 12.4942 18.6689 12.2386 18.6689C12.0086 18.6689 11.7818 18.6378 11.5582 18.5754C11.3346 18.5107 11.1312 18.4138 10.948 18.2846C10.767 18.1554 10.6222 17.9905 10.5136 17.7899C10.4322 17.6398 10.3814 17.469 10.3609 17.2777C10.3492 17.1678 10.4402 17.078 10.5506 17.078H11.1122C11.2227 17.078 11.3094 17.1683 11.3272 17.2773C11.3383 17.3455 11.3557 17.4072 11.3793 17.4624C11.424 17.5671 11.4868 17.6518 11.5678 17.7164C11.6508 17.781 11.7488 17.8278 11.8617 17.8568C11.9767 17.8857 12.1023 17.9002 12.2386 17.9002C12.4047 17.9002 12.541 17.8757 12.6475 17.8267C12.7561 17.7777 12.836 17.7097 12.8871 17.6228C12.9404 17.5359 12.967 17.4379 12.967 17.3287Z"
      fill={theme.colors[color].value}
    />
    <Path
      d="M15.9966 13.7358C16.0715 13.7358 16.1401 13.7776 16.1744 13.8441L16.816 15.0888C16.8905 15.2333 17.0971 15.2333 17.1716 15.0888L17.8133 13.8441C17.8476 13.7776 17.9162 13.7358 17.991 13.7358H18.6236C18.7764 13.7358 18.8728 13.9002 18.7981 14.0335L17.6685 16.0507C17.6344 16.1117 17.6345 16.186 17.6689 16.2468L18.8314 18.3037C18.9067 18.437 18.8104 18.6021 18.6572 18.6021H18.0161C17.9415 18.6021 17.8731 18.5606 17.8386 18.4944L17.1712 17.2118C17.0965 17.0682 16.8911 17.0682 16.8164 17.2118L16.149 18.4944C16.1145 18.5606 16.0461 18.6021 15.9716 18.6021H15.3244C15.1712 18.6021 15.0748 18.4369 15.1504 18.3035L16.3153 16.247C16.3498 16.1861 16.3499 16.1116 16.3157 16.0505L15.1836 14.0337C15.1087 13.9004 15.2051 13.7358 15.358 13.7358H15.9966Z"
      fill={theme.colors[color].value}
    />
  </Root>
);
