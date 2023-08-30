import { FC } from 'react';

import { Root } from './style';
import { Props } from './type';

export const Card: FC<Props> = ({ children, className }) => <Root className={className}>{children}</Root>;
