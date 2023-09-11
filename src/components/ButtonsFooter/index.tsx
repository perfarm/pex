import { FC } from 'react';

import { CaretLeft } from '~/components/Icons';
import { ButtonBack, ButtonNext, Root } from './style';
import { Props } from './types';

export const ButtonsFooter: FC<Props> = ({ children, className, hideBackBtn, isLoading, onClickBack, onClickNext }) => {
  return (
    <Root className={className}>
      {!hideBackBtn && (
        <ButtonBack color="primary" variant="outlined" onClick={onClickBack} disabled={isLoading}>
          <CaretLeft color="pastureGreen" size={24} />
        </ButtonBack>
      )}
      <ButtonNext color="primary" onClick={onClickNext} showLoader={isLoading} disabled={isLoading}>
        {children}
      </ButtonNext>
    </Root>
  );
};
