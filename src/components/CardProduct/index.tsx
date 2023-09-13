import { FC } from 'react';

import { Description, Img, ImgContent, Root } from './style';
import { Props } from './types';

export const CardProduct: FC<Props> = ({ className, hasError = false, onClick, isActive, name, image }) => (
  <Root className={className} onClick={onClick} hasError={hasError} isActive={isActive}>
    <ImgContent>
      <Img src={image} alt={name} width={25} height={25} />
    </ImgContent>

    <Description variant="$body3" weight="$bold">
      {name}
    </Description>
  </Root>
);
