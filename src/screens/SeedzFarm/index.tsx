import { FC } from 'react';

import { Intro } from './components/Intro';
import { Quotation } from './components/Quotation';

import { Container, Page, Title } from './style';
import { Props } from './types';

export const SeedzFarm: FC<Props> = ({ quotation, news }) => (
  <Page>
    <Intro />

    {quotation && (
      <Container>
        <Title color="$gray" variant="$body3" weight="$bold">
          Sua cotação
        </Title>
        <Quotation quotation={quotation} />
      </Container>
    )}
    {news && (
      <Container>
        <Title color="$gray" variant="$body3" weight="$bold">
          Sua cotação
        </Title>
        <Quotation quotation={quotation} />
      </Container>
    )}
  </Page>
);
