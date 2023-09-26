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
      step={2}
      handleNext={handleNext}
      hideBackBtn
      btnNextDescription={
        <>
          PROGRAMAÇÃO <IconRight color="white" size={24} />
        </>
      }
      stepOk
    >
      <Image src="/static/imgs/machine.png" alt="insumo" />

      <Title color="$pastureGreen" variant="$headline6">
        MAQUINÁRIO PLANEJADO COM SUCESSO!
      </Title>

      <Description color="$gray" variant="$body5">
        Atenção: durante o próximo intervalo será enviado para o seu e-mail de cadastro o Relatório da Administração com
        o planejamento da sua produção. Acompanhe os debates para maiores esclarecimentos.
      </Description>
    </TemplatePerfarm>
  );
};
