import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';
import { Card } from '~/components/Card';
import { Col, Row } from '~/components/Grid';
import { CaretLeft } from '~/components/Icons/CaretLeft';
import { TwoColorsContainer } from '~/components/TwoColorsContainer';
import { Typography } from '~/components/Typography';
import { useAuth } from '~/context/auth/useAuth';
import { newsList } from '~/screens/SeedzFarm/utils';
import { Description, ImageContainer, ImageContent, Page, Title, TitleContainer } from './style';

export const News: FC = () => {
  const { back } = useRouter();
  const { user } = useAuth();

  const news = useMemo(() => {
    const [selected] = newsList.filter((newsItem) => newsItem.id === user?.production.id);
    return selected;
  }, [user]);

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
            <ImageContent style={{ backgroundImage: `url(${news?.image})` }}></ImageContent>
          </ImageContainer>

          <Title color="$pastureGreen" variant="$body2" weight="$bold">
            {news?.title}
          </Title>

          <Row style={{ marginTop: 10 }}>
            <Col>
              <div>
                <Typography color="$gray" variant="$body7">
                  {news?.date}
                </Typography>
                <Typography color="$gray" variant="$body7">
                  Fonte: <b>{news?.source}</b>
                </Typography>
              </div>
            </Col>
          </Row>

          <Description color="$gray" variant="$body6">
            {news?.description.trim()}
          </Description>
        </Card>
      </TwoColorsContainer>
    </Page>
  );
};
