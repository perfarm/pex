import { FC } from 'react';

import { Root } from './style';
import { Props } from './types';

export const Card: FC<Props> = ({ children, style }) => <Root style={style}>{children}</Root>;
