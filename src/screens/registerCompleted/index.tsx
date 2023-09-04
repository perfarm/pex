import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { IconRight } from '~/commons/variants/components';
import { ImgFarmerGif } from '~/components/ImgFarmerGif';
import { TemplateFlowStep } from '~/components/TemplateFlowStep';
import { Br, Description, Title } from './style';

export const ScreenRegisterCompleted = () => {
  const { push } = useRouter();

  const handleNext = useCallback(() => push('/schedule'), [push]);

  const handleBack = useCallback(() => push('/register/production'), [push]);

  return (
    <TemplateFlowStep
      step={3}
      handleNext={handleNext}
      handleBack={handleBack}
      btnNextDescription={
        <>
          COMEÇAR <IconRight color="white" size={24} />
        </>
      }
    >
      <ImgFarmerGif />
      <Title color="$pastureGreen" variant="$headline6">
        SEJA BEM-VINDO À EXPERIÊNCIA PERFARM
      </Title>
      <Description color="$gray" variant="$body4">
        Em alguns passos essenciais, apresentaremos de forma simplificada como é possível realizar a gestão de sua
        fazenda, neste aplicativo exclusivo para o evento.
        <Br />
        <Br />
        Aproveite ao máximo!
      </Description>
    </TemplateFlowStep>
  );
};
