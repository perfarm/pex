import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { IconRight } from '~/commons/variants/components';
import { ImgPerfarmRafiki } from '~/components/ImgPerfarmExperience copy';
import { TemplatePerfarm } from '~/components/TemplatePerfarm';
import { Br, Description, Title } from './style';

export const ScreenPerfarm = () => {
  const { push } = useRouter();

  const handleNext = useCallback(() => push('/schedule'), [push]);

  const handleBack = useCallback(() => push('/register/production'), [push]);

  return (
    <TemplatePerfarm
      // step={3}
      handleNext={handleNext}
      handleBack={handleBack}
      btnNextDescription={
        <>
          COMEÇAR <IconRight color="white" size={24} />
        </>
      }
    >
      <ImgPerfarmRafiki />
      <Title color="$pastureGreen" variant="$headline6">
        SIMULADOR AGRO GESTÃO PRO
      </Title>
      <Description color="$gray" variant="$body4">
        Parabéns por entrar na jornada de gestão agrícola avançada, explorando os benefícios da gestão tecnológica e
        organizada.
        <Br />
        <Br />
        Durante o evento, você interagirá diretamente com o simulador, tornando a experiência envolvente e prática.
        <Br />
        <Br />
        Ao final, você receberá um relatório contemplando toda a hierarquia de alocação de custo real da produção, todo
        o fluxo de informações de ponta a ponta e suas respectivas rotinas de gestão.
      </Description>
    </TemplatePerfarm>
  );
};
