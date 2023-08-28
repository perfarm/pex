import React, { FC } from 'react';

import { Button as ButtonStyled } from './style';
import { Props } from './types';

export const Button: FC<Props> = ({
  children,
  className,
  color,
  disabled,
  fullWidth,
  id,
  onClick,
  size,
  variant,
}) => {
  return (
    <ButtonStyled
      className={className}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      id={id}
      onClick={onClick}
      size={size}
      variant={variant}
    >
      {children}
    </ButtonStyled>
  );
};
