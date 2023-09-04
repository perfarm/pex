import { FC } from 'react';

import { Description, Img, ImgContent, Root } from './style';
import { Props } from './types';

export const CardProduct: FC<Props> = ({ className, onClick, isActive, name, image }) => (
  <Root className={className} onClick={onClick} isActive={isActive}>
    <ImgContent>
      <Img src={image} alt={name} width={35} height={35} />
    </ImgContent>
    <Description variant="$body3" weight="$bold">
      {name}
    </Description>
  </Root>
);
