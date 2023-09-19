import { FC } from 'react';

import { Intro } from './components/Intro';
import { News } from './components/News';
import { Quotation } from './components/Quotation';

import { Container, Page, Title } from './style';
import { Props } from './types';

export const SeedzFarm: FC<Props> = ({ quoatation, news }) => {
  return (
    <Page>
      <Intro />

      <Container>
        <Title color="$gray" variant="$body3" weight="$bold">
          Sua cotação
        </Title>
        <Quotation />
      </Container>

      <Container>
        <Title color="$gray" variant="$body3" weight="$bold">
          Notícias gerais
        </Title>
        <News />
      </Container>
    </Page>
  );
};
