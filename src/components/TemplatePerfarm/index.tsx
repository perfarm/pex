import { FC } from 'react';
import { ButtonBack, ButtonContent, ButtonNext, CardContainer, Title } from '~/commons/variants/components';
import { CaretLeft } from '~/components/Icons/CaretLeft';
import { StepFlow } from '~/components/StepFlow';
import { Typography } from '~/components/Typography';
import { Root } from './style';
import { Props } from './types';

export const TemplatePerfarm: FC<Props> = ({
  step,
  title,
  subtitle,
  children,
  className,
  handleNext,
  handleBack,
  isBtnNextDisabled,
  btnNextDescription,
  isBtnNextLoading,
}) => (
  <Root className={className}>
    <CardContainer>
      {step && <StepFlow step={step} />}
      {title && (
        <Title color="$pastureGreen" variant="$headline6">
          {title}
        </Title>
      )}
      {subtitle && (
        <Typography color="$gray" variant="$body4">
          {subtitle}
        </Typography>
      )}
      {children}
      <ButtonContent>
        {step > 1 && (
          <ButtonBack color="primary" variant="outlined" onClick={handleBack}>
            <CaretLeft color="pastureGreen" size={24} />
          </ButtonBack>
        )}
        <ButtonNext color="primary" onClick={handleNext} showLoader={isBtnNextLoading} disabled={isBtnNextDisabled}>
          {btnNextDescription}
        </ButtonNext>
      </ButtonContent>
    </CardContainer>
  </Root>
);
