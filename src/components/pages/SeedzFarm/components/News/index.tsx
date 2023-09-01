import { FC } from 'react';

import { Card } from '~/components/Card';
import { CaretRight } from '~/components/Icons';
import { Typography } from '~/components/Typography';
import { Col, Row } from '~/components/pages/admin/release/Manage/style';
import { DirCol, LeftCol, ReadMoreCol } from './style';

export const News: FC = () => (
  <Card style={{ width: '100%', overflow: 'hidden' }}>
    <Row>
      <LeftCol>
        <Typography color="$pastureGreen" variant="$body5" weight="$bold">
          Milho segue operando em alta na B3 nesta segunda-feira
        </Typography>

        <Row style={{ justifyContent: 'space-between', marginTop: 10 }}>
          <Col>
            <Typography color="$gray" variant="$body7" tag="span">
              Ontem
            </Typography>
          </Col>
          <ReadMoreCol>
            <Typography color="$gray" variant="$body7" tag="span">
              Ler mais
            </Typography>
            <CaretRight color="gray" size={10} />
          </ReadMoreCol>
        </Row>
      </LeftCol>
      <DirCol>
        <div
          style={{
            background: 'url(https://s3-sa-east-1.amazonaws.com/atomic-public/content/news/image/corn.jpg)',
            backgroundSize: 'cover',
            height: '100%',
            width: 95,
          }}
        ></div>
      </DirCol>
    </Row>
  </Card>
);
