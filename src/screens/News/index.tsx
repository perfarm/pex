import { FC } from 'react';

import NewsMock from '~/commons/mock/news';

import { useRouter } from 'next/router';
import { Card } from '~/components/Card';
import { Col, Row } from '~/components/Grid';
import { CaretLeft } from '~/components/Icons/CaretLeft';
import { TwoColorsContainer } from '~/components/TwoColorsContainer';
import { Typography } from '~/components/Typography';
import { Description, ImageContainer, ImageContent, Page, Title, TitleContainer } from './style';

export const News: FC = () => {
  const { back } = useRouter();

  return (
    <Page>
      <TwoColorsContainer>
        <TitleContainer onClick={back}>
          <CaretLeft size={24} color="white" />
          <Typography color="$white" weight="$bold" variant="$body2">
            Notícia
          </Typography>
        </TitleContainer>

        <Card style={{ maxWidth: 500, padding: 15, width: '100%' }}>
          <ImageContainer>
            <ImageContent style={{ backgroundImage: `url(${NewsMock.image})` }}></ImageContent>
          </ImageContainer>

          <Title color="$pastureGreen" variant="$body2" weight="$bold">
            {NewsMock.title}
          </Title>

          <Row style={{ marginTop: 10 }}>
            <Col>
              <div>
                <Typography color="$gray" variant="$body7">
                  Ontem
                </Typography>
                <Typography color="$gray" variant="$body7">
                  Fonte: <b>Canal Rural</b>
                </Typography>
              </div>
            </Col>
          </Row>

          <Description color="$gray" variant="$body6">
            {NewsMock.content.trim()}
          </Description>
        </Card>
      </TwoColorsContainer>
    </Page>
  );
};
