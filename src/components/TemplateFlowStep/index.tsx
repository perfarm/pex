import { FC } from 'react';
import { ButtonBack, ButtonContent, ButtonNext, CardContainer, Title } from '~/commons/variants/components';
import { CaretLeft } from '~/components/Icons/CaretLeft';
import { ImgPerfarmExperience } from '~/components/ImgPerfarmExperience';
import { StepFlow } from '~/components/StepFlow';
import { Typography } from '~/components/Typography';
import { Root } from './style';
import { Props } from './types';

export const TemplateFlowStep: FC<Props> = ({
  step,
  title,
  subtitle,
  children,
  className,
  handleNext,
  handleBack,
  btnNextDescription,
  isBtnNextLoading,
}) => (
  <Root className={className}>
    <ImgPerfarmExperience />
    <CardContainer>
      <StepFlow step={step} />
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
          <ButtonBack color="primary" variant="outlined" onClick={handleBack} disabled={isBtnNextLoading}>
            <CaretLeft color="pastureGreen" size={24} />
          </ButtonBack>
        )}
        <ButtonNext color="primary" onClick={handleNext} showLoader={isBtnNextLoading} disabled={isBtnNextLoading}>
          {btnNextDescription}
        </ButtonNext>
      </ButtonContent>
    </CardContainer>
  </Root>
);
