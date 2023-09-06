import { FC } from 'react';
import { ImgMobileScreenMachine } from '~/components/ImgMobileScreenMachine';
import { ImgPerfarmExperienceLine } from '~/components/ImgPerfarmExperienceLine';
import { ImgRealizationPartners } from '~/components/ImgRealizationPartners';
import { Typography } from '~/components/Typography';
import {
  BodyContent,
  Br,
  ButtonDownload,
  Container,
  Description,
  FooterContent,
  IconDownload,
  Root,
  Subtitle,
  Title,
} from './style';

export const ScreenDownload: FC = () => {
  return (
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
          <ImgMobileScreenMachine />
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
      <FooterContent>
        <Container>
          <Typography color="$white" variant="$body6" weight="$medium">
            Realização
          </Typography>
          <Br />
          <ImgRealizationPartners />
        </Container>
      </FooterContent>
    </Root>
  );
};
