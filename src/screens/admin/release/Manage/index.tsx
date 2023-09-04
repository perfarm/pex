import { FC } from 'react';

import { Row } from '~/components/Grid';
import { Typography } from '~/components/Typography';
import { Feature } from './components/Feature';
import { Schedule } from './components/Schedule';
import { Users } from './components/Users';
import { Col, Page, TitleContainer } from './style';

export const Manage: FC = () => {
  return (
    <Page>
      <TitleContainer>
        <Typography variant="$headline1">Painel ADMIN</Typography>
      </TitleContainer>

      <Row style={{ flexDirection: 'column' }}>
        <Row>
          <Col style={{ maxWidth: 400 }}>
            <Feature />
          </Col>

          <Col style={{ width: 600 }}>
            <Schedule />
          </Col>
        </Row>
        <Row style={{ paddingBottom: 20, paddingTop: 20 }}>
          <Users />
        </Row>
      </Row>
    </Page>
  );
};
