import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';
import { Container, ImageResponsive, Strong } from '~/commons/variants/components';
import { ButtonsFooter } from '~/components/ButtonsFooter';
import { FooterRealizationPartners } from '~/components/FooterRealizationPartners';
import { CaretRight, CheckCircle } from '~/components/Icons';
import { ImgPerfarmExperienceLine } from '~/components/ImgPerfarmExperienceLine';
import { BodyContent, Content, Description, Root, Title, TitleConclusion } from './style';

export const ScreenDownloadStepFour: FC = () => {
  const { push } = useRouter();

  const goToRegister = useCallback(() => {
    push('/register/profile');
  }, [push]);

  return (
    <Root>
      <BodyContent>
        <Container>
          <ImgPerfarmExperienceLine />

          <Title color="$pastureGreen" variant="$body2" weight="$bold">
            INSTALAÇÃO DO APP
          </Title>

          <ImageResponsive src="/static/imgs/iphone-step-4.png" alt="Landscape picture" width={601} height={702} />

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
          <div style={{ marginTop: 30 }}>
            <Description color="$mediumGray" variant="$body5" weight="$medium">
              ou
            </Description>
          </div>
          <ButtonsFooter onClickNext={goToRegister} hideBackBtn>
            SEGUIR EXPERIÊNCIA WEB
            <CaretRight color="pastureGreen" size={24} />
          </ButtonsFooter>
        </Container>
      </BodyContent>
      <FooterRealizationPartners />
    </Root>
  );
};
