import { FC, useCallback } from 'react';
import { Container, Strong } from '~/commons/variants/components';
import { FooterRealizationPartners } from '~/components/FooterRealizationPartners';
import { CaretLeft, CaretRight } from '~/components/Icons';
import { ImgPerfarmExperienceLine } from '~/components/ImgPerfarmExperienceLine';
import { BodyContent, ButtonBack, ButtonContent, ButtonNext, Description, Img, Root, Title } from './style';

export const ScreenDownloadStepByStep: FC = () => {
  const handleBack = useCallback(() => {}, []);
  const handleNext = useCallback(() => {}, []);

  return (
    <Root>
      <BodyContent>
        <Container>
          <ImgPerfarmExperienceLine />
          <Title color="$pastureGreen" variant="$body2" weight="$bold">
            INSTALAÇÃO DO APP
          </Title>

          <Img src="/static/imgs/download.png" alt="phone" />

          <Title color="$pastureGreen" variant="$body2" weight="$bold">
            1º PASSO
          </Title>
          <Description variant="$body6" weight="$medium">
            No seu navegador Safari, clique em <Strong>“Downloads”</Strong>, indicado pela seta.
          </Description>

          <ButtonContent>
            {/* {hideBackBtn && ( */}
            <ButtonBack color="primary" variant="outlined" onClick={handleBack}>
              <CaretLeft color="pastureGreen" size={24} />
            </ButtonBack>
            {/* )} */}
            <ButtonNext color="primary" onClick={handleNext}>
              AVANÇAR
              <CaretRight color="pastureGreen" size={24} />
            </ButtonNext>
          </ButtonContent>
        </Container>
      </BodyContent>
      <FooterRealizationPartners />
    </Root>
  );
};
