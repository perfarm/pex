import React, { FC, memo } from 'react';

import { Root } from './style';
import { Props } from './type';
import { variantTags } from './utils';

const RootTypography: FC<Props> = ({
  children,
  className,
  color = '$gray',
  tag,
  variant = '$body7',
  weight,
}: Props) => (
  <Root as={tag || variantTags[variant]} className={className} css={{ color, fontWeight: weight, fontX: variant }}>
    {children}
  </Root>
);

export const Typography = memo(RootTypography);
