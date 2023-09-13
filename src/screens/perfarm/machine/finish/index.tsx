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
        MAQUINÁRIO CADASTRADO COM SUCESSO!
      </Title>

      <Description color="$gray" variant="$body5">
        Esteja atento à programação do evento, pois durante o <b>intervalo do café, às 16h</b>, ocorrerá a entrega da
        personalização e do relatório administrativo (degustação).
      </Description>
    </TemplatePerfarm>
  );
};
