import { useRouter } from 'next/router';
import { FC } from 'react';
import { Card } from '~/components/Card';
import { Row } from '~/components/Grid';
import { CaretRight } from '~/components/Icons';
import { Typography } from '~/components/Typography';
import { Col } from '~/screens/admin/release/Manage/style';
import { DirCol, LeftCol, ReadMoreCol } from './style';
import { Props } from './types';

export const News: FC<Props> = ({ date, image, title }) => {
  const { push } = useRouter();

  return (
    <Card style={{ width: '100%', overflow: 'hidden' }} onClick={() => push('/seedz-farm/news')}>
      <Row>
        <LeftCol>
          <Typography color="$pastureGreen" variant="$body5" weight="$bold">
            {title}
          </Typography>

          <Row style={{ justifyContent: 'space-between', marginTop: 10 }}>
            <Col>
              <Typography color="$gray" variant="$body7" tag="span">
                {date}
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
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: 95,
            }}
          ></div>
        </DirCol>
      </Row>
    </Card>
  );
};
