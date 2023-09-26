/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { TemplatePerfarm } from '~/components/TemplatePerfarm';
import { Description, Image, Title } from './style';

export const Finish: FC = () => (
  <TemplatePerfarm step={3} hideBackBtn hideNextBtn stepOk>
    <Image src="/static/imgs/report.png" alt="report" />

    <Title color="$pastureGreen" variant="$headline6">
      DISPONÍVEL!
    </Title>

    <Description color="$gray" variant="$body5">
      Desfrute dos resultados da sua simulação. Compare-os a estratégias de mercado. E planeje os próximos passos da
      gestão do seu negócio.
      <br />
      <br />
      <b>Fica nosso convite</b> para continuarmos fornecendo conhecimento e informatizando o seu negócio rural.
      <br />
      <br />
      Acesse o relatório e siga o link do Diagnóstico da Gestão para novas interações.
    </Description>
  </TemplatePerfarm>
);
