import React, { FC } from 'react';

import { Root } from './style';
import { Props } from './types';

export const ButtonIcon: FC<Props> = (props) => <Root {...props} hasIcon />;
