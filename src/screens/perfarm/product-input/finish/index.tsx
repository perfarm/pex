/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';
import { IconRight } from '~/commons/variants/components';
import { TemplatePerfarm } from '~/components/TemplatePerfarm';
import { Description, Image, Title } from './style';

export const Finish: FC = () => {
  const { push } = useRouter();

  const handleNext = useCallback(() => push('/schedule'), [push]);

  return (
    <TemplatePerfarm
      step={1}
      handleNext={handleNext}
      hideBackBtn
      btnNextDescription={
        <>
          IR PARA PROGRAMAÇÃO <IconRight color="white" size={24} />
        </>
      }
      stepOk
    >
      <Image src="/static/imgs/insumo.png" alt="insumo" />

      <Title color="$pastureGreen" variant="$headline6">
        INSUMOS CADASTRADO COM SUCESSO!
      </Title>

      <Description color="$gray" variant="$body4">
        Esteja atento à programação do evento, pois durante o <b>intervalo do almoço, às 12h</b>, você seguirá com a
        experiência do simulador e fará suas escolhas de máquinas e outras despesas. Prepare-se para uma experiência
        envolvente e interativa!
      </Description>
    </TemplatePerfarm>
  );
};