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
      hideBackBtn
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
        BOAS-VINDAS À EXPERIÊNCIA PERFARM
      </Title>
      <Description color="$gray" variant="$body4">
        Você está a poucos passos de viver uma experiência digital focada na gestão de resultados do negócio rural.
        <Br />
        <Br />
        Aproveite ao máximo esse aplicativo, desenvolvido exclusivamente para o evento!
      </Description>
    </TemplateFlowStep>
  );
};
