import { FC } from 'react';

import { Typography } from '~/components/Typography';
import { Feature } from './components/Feature';
import { Users } from './components/Users';
import { Col, Page, Row, TitleContainer } from './style';

export const Manage: FC = () => {
  return (
    <Page>
      <TitleContainer>
        <Typography variant="$headline1">Painel ADMIN</Typography>
      </TitleContainer>

      <Row>
        <Col>
          <Feature />
        </Col>

        <Col style={{ minWidth: '700px' }}>
          <Users />
        </Col>
      </Row>
    </Page>
  );
};
