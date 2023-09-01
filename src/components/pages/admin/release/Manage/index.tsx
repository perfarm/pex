import { FC } from 'react';

import { Typography } from '~/components/Typography';
import { Feature } from './components/Feature';
import { Schedule } from './components/Schedule';
import { Users } from './components/Users';
import { Col, Page, Row, TitleContainer } from './style';

export const Manage: FC = () => {
  return (
    <Page>
      <TitleContainer>
        <Typography variant="$headline1">Painel ADMIN</Typography>
      </TitleContainer>

      <Row style={{ flexDirection: 'column' }}>
        <Row>
          <Col>
            <Feature />
          </Col>

          <Col>
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
