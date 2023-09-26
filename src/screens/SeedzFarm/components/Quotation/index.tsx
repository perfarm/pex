import Image from 'next/image';
import { FC } from 'react';

import { Card } from '~/components/Card';
import { Typography } from '~/components/Typography';

import { Row } from '~/components/Grid';
import { CenterCol, DirCol, ImageCol } from './style';
import { Props } from './types';

export const Quotation: FC<Props> = ({ city, image, date, hours, name, source, value, valueMeasure }) => (
  <Card style={{ padding: 15, width: '100%' }}>
    <Row>
      <ImageCol>
        <Image alt={name} src={image} height={40} width={40} />
      </ImageCol>
      <CenterCol>
        <div>
          <Typography color="$pastureGreen" variant="$body5" weight="$bold">
            {name}
          </Typography>
          <Typography color="$pastureGreen" variant="$body6">
            {city}
          </Typography>
        </div>
        <div>
          <Typography color="$gray" variant="$body6" weight="$bold" tag="span">
            R$&nbsp;
          </Typography>
          <Typography color="$gray" variant="$body4" weight="$bold" tag="span">
            {value}&nbsp;
          </Typography>
          <Typography color="$gray" variant="$body6" tag="span">
            /&nbsp;{valueMeasure}
          </Typography>
        </div>
      </CenterCol>
      <DirCol>
        <div style={{ textAlign: 'right' }}>
          <Typography color="$gray" variant="$body7" weight="$bold">
            {date}
          </Typography>
          <Typography color="$gray" variant="$body7">
            {hours}
          </Typography>
        </div>
        <div style={{ marginTop: 10, textAlign: 'right' }}>
          <Typography color="$gray" variant="$body7">
            Fonte
          </Typography>
          <Typography color="$gray" variant="$body7" weight="$bold">
            {source}
          </Typography>
        </div>
      </DirCol>
    </Row>
  </Card>
);
