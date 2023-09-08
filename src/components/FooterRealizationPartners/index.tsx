import { FC } from 'react';
import { Br, Container } from '~/commons/variants/components';
import { ImgRealizationPartners } from '~/components/ImgRealizationPartners';
import { Root, Title } from './style';

export const FooterRealizationPartners: FC = () => (
  <Root>
    <Container>
      <Title color="$white" variant="$body6" weight="$medium">
        Realização
      </Title>
      <Br />
      <ImgRealizationPartners />
    </Container>
  </Root>
);
