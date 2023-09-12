import { FC } from 'react';

import { Spinner } from '../Spinner';
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
  type,
  variant,
  showLoader = false,
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
      type={type}
    >
      {showLoader ? <Spinner /> : children}
    </ButtonStyled>
  );
};
