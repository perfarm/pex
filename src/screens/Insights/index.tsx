import { FC, useState } from 'react';

import { ButtonNext, IconRight } from '~/commons/variants/components';
import { Card } from '~/components/Card';
import { Col, Row } from '~/components/Grid';
import { CaretRight } from '~/components/Icons';
import { Typography } from '~/components/Typography';
import {
  CaretParent,
  CollapseDecription,
  CollapseText,
  Description,
  Image,
  Page,
  RewardValue,
  TwoColorsContainer,
} from './style';

export const Insights: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <Page>
      <TwoColorsContainer>
        <Card style={{ marginBottom: 15, overflow: 'hidden' }} onClick={() => setShow(!show)}>
          <Row style={{ padding: 15 }}>
            <Col style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <Typography color="$pastureGreen" variant="$body5" weight="$bold">
                QUEM É A SEEDZ
              </Typography>
            </Col>

            <Col style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', display: 'flex' }}>
              <CaretParent isActive={show}>
                <CaretRight color="gray" />
              </CaretParent>
            </Col>
          </Row>

          <CollapseDecription isActive={show} style={{ borderTop: '1px solid #EEE' }}>
            <div style={{ padding: 15 }}>
              <CollapseText color="$gray" variant="$body5">
                A Seedz é uma empresa nascida da união de pessoas inspiradas pelo Agronegócio e que acredita em
                inovação.
                <br />
                <br />
                Fidelidade é uma expressão que também define o nosso negócio. Empresas, Produtores Rurais e Famílias:
                todos juntos, semeando um futuro transformador. Somos uma organização que através do programa de
                coalizão, valoriza o produtor rural e permite ao participante optar por uma ampla variedade de
                recompensas, tanto de produtos, quanto de serviços.
              </CollapseText>
            </div>
          </CollapseDecription>
        </Card>

        <Card style={{ maxWidth: 500, padding: 15, width: '100%' }}>
          <Image src="/static/imgs/insights.png" alt="insights" />

          <Description color="$gray" variant="$body5">
            No Farm Insights, você tem a oportunidade valiosa de compartilhar seus conhecimentos sobre o agro. Ao
            responder às perguntas, você será recompensado com moedas SDZ e terá acesso aos resultados agrupados das
            pesquisas. Sua participação não apenas traz recompensas, mas também contribuí para o aprimoramento contínuo
            da comunidade.
          </Description>

          <Card style={{ padding: 15, width: '100%', marginTop: 30, textAlign: 'center' }}>
            <Typography color="$gray" variant="$body5" weight="$bold">
              Responda agora e resgate:
            </Typography>
            <RewardValue color="$pastureGreen" variant="$description1">
              <b>800</b> SDZ
            </RewardValue>
          </Card>

          <ButtonNext color="primary" onClick={() => undefined} fullWidth css={{ marginTop: 15 }}>
            INICIAR PESQUISA <IconRight color="white" size={24} />
          </ButtonNext>
        </Card>
      </TwoColorsContainer>
    </Page>
  );
};
