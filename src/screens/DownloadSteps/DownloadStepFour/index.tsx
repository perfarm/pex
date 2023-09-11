import { FC } from 'react';
import { Container, ImageResponsive, Strong } from '~/commons/variants/components';
import { FooterRealizationPartners } from '~/components/FooterRealizationPartners';
import { CheckCircle } from '~/components/Icons';
import { ImgPerfarmExperienceLine } from '~/components/ImgPerfarmExperienceLine';
import { BodyContent, Content, Description, Root, Title, TitleConclusion } from './style';

export const ScreenDownloadStepFour: FC = () => (
  <Root>
    <BodyContent>
      <Container>
        <ImgPerfarmExperienceLine />

        <Title color="$pastureGreen" variant="$body2" weight="$bold">
          INSTALAÇÃO DO APP
        </Title>

        <ImageResponsive src="/imgs/banners/iphone-step-4.png" alt="Landscape picture" width={601} height={702} />

        <Title color="$pastureGreen" variant="$body2" weight="$bold">
          4º PASSO
        </Title>
        <Description variant="$body5" weight="$medium">
          O ícone do aplicativo será adicionado à <Strong>tela inicial do iPhone</Strong>; agora, tudo o que você
          precisa fazer é tocar nele. Aproveite ao máximo!
        </Description>
        <Content>
          <TitleConclusion variant="$body4" color="$pastureGreen" weight="$bold">
            CONCLUÍDO
          </TitleConclusion>
          <CheckCircle color="pastureGreen" size={24} />
        </Content>
      </Container>
    </BodyContent>
    <FooterRealizationPartners />
  </Root>
);
