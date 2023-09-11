import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';
import { Container, ImageResponsive, Strong } from '~/commons/variants/components';
import { ButtonsFooter } from '~/components/ButtonsFooter';
import { FooterRealizationPartners } from '~/components/FooterRealizationPartners';
import { CaretRight } from '~/components/Icons';
import { ImgPerfarmExperienceLine } from '~/components/ImgPerfarmExperienceLine';
import { BodyContent, Description, Root, Title } from './style';

export const ScreenDownloadStepThree: FC = () => {
  const { push } = useRouter();

  const handleBack = useCallback(() => {
    push('/download/step-by-step/2');
  }, [push]);

  const handleNext = useCallback(() => {
    push('/download/step-by-step/4');
  }, [push]);

  return (
    <Root>
      <BodyContent>
        <Container>
          <ImgPerfarmExperienceLine />

          <Title color="$pastureGreen" variant="$body2" weight="$bold">
            INSTALAÇÃO DO APP
          </Title>

          <ImageResponsive src="/static/imgs/iphone-step-3.png" alt="Landscape picture" width={601} height={702} />

          <Title color="$pastureGreen" variant="$body2" weight="$bold">
            3º PASSO
          </Title>
          <Description variant="$body5" weight="$medium">
            Digite o nome <Strong>“PEX”</Strong> e depois clique em <Strong>“Adicionar”</Strong>, indicado pela seta.
          </Description>

          <ButtonsFooter onClickNext={handleNext} onClickBack={handleBack}>
            AVANÇAR
            <CaretRight color="pastureGreen" size={24} />
          </ButtonsFooter>
        </Container>
      </BodyContent>
      <FooterRealizationPartners />
    </Root>
  );
};
