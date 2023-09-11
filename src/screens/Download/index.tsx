import { FC } from 'react';
import { Container } from '~/commons/variants/components';
import { FooterRealizationPartners } from '~/components/FooterRealizationPartners';
import { ImgPerfarmExperienceLine } from '~/components/ImgPerfarmExperienceLine';
import { BodyContent, ButtonDownload, Description, IconDownload, Img, Root, Subtitle, Title } from './style';

export const ScreenDownload: FC = () => (
  <Root>
    <BodyContent>
      <Container>
        <ImgPerfarmExperienceLine />
        <Title color="$pastureGreen" variant="$body2" weight="$bold">
          27 E 29 DE SETEMBRO
        </Title>
        <Subtitle color="$pastureGreen" variant="$body6" weight="$medium">
          ESPAÇO RIBEIRÃO PRETO - SÃO PAULO
        </Subtitle>
        <Img src="/static/imgs/download.png" alt="phone" width={574} height={662} />
        <Title color="$pastureGreen" variant="$body2" weight="$bold">
          EXPERIMENTE O FUTURO DA GESTÃO AGRÍCOLA EM APENAS ALGUNS PASSOS SIMPLES!
        </Title>
        <Description variant="$body6" weight="$medium">
          Baixe este aplicativo exclusivo do evento, que oferece uma degustação da poderosa experiência Perfarm.
        </Description>
        <ButtonDownload id="pwaAppInstallBtn" color="primary">
          BAIXE AGORA O APP
          <IconDownload color="white" size={24} />
        </ButtonDownload>
      </Container>
    </BodyContent>
    <FooterRealizationPartners />
  </Root>
);
