import React, { FC } from 'react';

import { Description, DescriptionContainer, Img, Root } from './style';
import { Props } from './types';

export const Loader: FC<Props> = ({ children, position = 'fixed' }) => (
  <Root position={position}>
    <Img src="https://perfarm-production-file.s3.sa-east-1.amazonaws.com/assets/images/loader.gif" />

    {children && (
      <DescriptionContainer>
        <Description>{children}</Description>
      </DescriptionContainer>
    )}
  </Root>
);
