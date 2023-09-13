/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { TemplatePerfarm } from '~/components/TemplatePerfarm';
import { Description, Image, Title } from './style';

export const Finish: FC = () => (
  <TemplatePerfarm step={3} hideBackBtn hideNextBtn stepOk>
    <Image src="/static/imgs/report.png" alt="report" />

    <Title color="$pastureGreen" variant="$headline6">
      SEU RELATÓRIO ESTÁ DISPONÍVEL!
    </Title>

    <Description color="$gray" variant="$body5">
      Esperamos que a experiência tenha sido proveitosa. Ao conferir o material, você poderá entender por que uma gestão
      tecnológica e organizada <b>é crucial para a saúde financeira do seu negócio.</b>
      <br />
      <br />
      Estamos ansiosos para ouvir seus feedbacks!
    </Description>
  </TemplatePerfarm>
);
