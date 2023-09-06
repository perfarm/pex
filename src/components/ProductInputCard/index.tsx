import { FC } from 'react';

import { Description, Img, ImgContent, Root, Title } from './style';
import { Props } from './types';

export const ProductInputCard: FC<Props> = ({
  className,
  description,
  hasError = false,
  onClick,
  isActive,
  name,
  image,
}) => (
  <Root className={className} onClick={onClick} hasError={hasError} isActive={isActive}>
    <ImgContent>
      <Img src={image} alt={name} />
    </ImgContent>
    <Title variant="$body3" weight="$bold">
      {name}
    </Title>
    <Description variant="$body5">{description}</Description>
  </Root>
);
