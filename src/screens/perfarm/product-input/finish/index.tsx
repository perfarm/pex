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
          PROGRAMAÇÃO <IconRight color="white" size={24} />
        </>
      }
      stepOk
    >
      <Image src="/static/imgs/insumo.png" alt="insumo" />

      <Title color="$pastureGreen" variant="$headline6">
        COMPRA DE INSUMOS PLANEJADA COM SUCESSO!
      </Title>

      <Description color="$gray" variant="$body5">
        Atenção à programação do evento. Durante o <b>intervalo do almoço, às 12h</b>, você poderá tomar uma nova
        decisão no seu negócio rural. Prepare-se para continuar agregando lucros a sua produção a partir da gestão.
      </Description>
    </TemplatePerfarm>
  );
};
