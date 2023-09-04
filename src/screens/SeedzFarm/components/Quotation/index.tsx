import Image from 'next/image';
import { FC } from 'react';

import { Card } from '~/components/Card';
import { Typography } from '~/components/Typography';

import { Row } from '~/components/Grid';
import { CenterCol, DirCol, ImageCol } from './style';

export const Quotation: FC = () => (
  <Card style={{ padding: 15, width: '100%' }}>
    <Row>
      <ImageCol>
        <Image
          alt="Soja"
          src="https://atomic-public.s3-sa-east-1.amazonaws.com/auth/cultivation/soybean.png"
          height={40}
          width={40}
        />
      </ImageCol>
      <CenterCol>
        <div>
          <Typography color="$pastureGreen" variant="$body5" weight="$bold">
            Soja
          </Typography>
          <Typography color="$pastureGreen" variant="$body6">
            Uberlândia (MG)
          </Typography>
        </div>
        <div>
          <Typography color="$gray" variant="$body6" weight="$bold" tag="span">
            R$&nbsp;
          </Typography>
          <Typography color="$gray" variant="$body4" weight="$bold" tag="span">
            150&nbsp;
          </Typography>
          <Typography color="$gray" variant="$body6" tag="span">
            / sc 60kg
          </Typography>
        </div>
      </CenterCol>
      <DirCol>
        <div>
          <Typography color="$gray" variant="$body7" weight="$bold">
            16/01/23
          </Typography>
          <Typography color="$gray" variant="$body7">
            às 16:21
          </Typography>
        </div>
        <div style={{ marginTop: 10 }}>
          <Typography color="$gray" variant="$body7">
            Fonte
          </Typography>
          <Typography color="$gray" variant="$body7" weight="$bold">
            Seedz
          </Typography>
        </div>
      </DirCol>
    </Row>
  </Card>
);
