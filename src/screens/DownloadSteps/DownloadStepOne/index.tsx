import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';
import { Container, ImageResponsive, Strong } from '~/commons/variants/components';
import { ButtonsFooter } from '~/components/ButtonsFooter';
import { FooterRealizationPartners } from '~/components/FooterRealizationPartners';
import { CaretRight } from '~/components/Icons';
import { ImgPerfarmExperienceLine } from '~/components/ImgPerfarmExperienceLine';
import { BodyContent, Description, Root, Title } from './style';

export const ScreenDownloadStepOne: FC = () => {
  const { push } = useRouter();

  const handleNext = useCallback(() => {
    push('/download/step-by-step/2');
  }, [push]);

  return (
    <Root>
      <BodyContent>
        <Container>
          <ImgPerfarmExperienceLine />

          <Title color="$pastureGreen" variant="$body2" weight="$bold">
            INSTALAÇÃO DO APP
          </Title>

          <ImageResponsive src="/static/imgs/iphone-step-1.png" alt="Landscape picture" width={601} height={702} />

          <Title color="$pastureGreen" variant="$body2" weight="$bold">
            1º PASSO
          </Title>
          <Description variant="$body5" weight="$medium">
            No seu navegador Safari, clique em <Strong>“Downloads”</Strong>, indicado pela seta.
          </Description>

          <ButtonsFooter onClickNext={handleNext} hideBackBtn>
            AVANÇAR
            <CaretRight color="pastureGreen" size={24} />
          </ButtonsFooter>
        </Container>
      </BodyContent>
      <FooterRealizationPartners />
    </Root>
  );
};
