import { FC, useMemo, useState } from 'react';

import Link from 'next/link';
import { ButtonNext, IconRight } from '~/commons/variants/components';
import { Card } from '~/components/Card';
import { Col, Row } from '~/components/Grid';
import { CaretRight } from '~/components/Icons';
import { Typography } from '~/components/Typography';
import { useAuth } from '~/context/auth/useAuth';
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
  const { user } = useAuth();
  const link = useMemo(
    () =>
      `https://pt.surveymonkey.com/r/LYVYD2J?phone=${user?.phone}&name=${user?.name}&email=${user?.email}&cpf=${user?.cpf}`,
    [user]
  );

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
                Nascida da união de pessoas inspiradas pelo agronegócio e inovação, a Seedz é uma empresa referência em
                soluções tecnológicas que conectam toda a cadeia de valor do agronegócio, gerando dados para aproximar
                produtores rurais de grandes oportunidades.
                <br />
                <br />
                Através dos Programas de Fidelidade para os produtores rurais, valorizamos e potencializamos a produção
                no campo e semeamos um futuro transformador, além de contar com outras soluções como plataformas para
                gestão e performance da fazenda e serviços financeiros.
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
              <b>1000</b> SDZ
            </RewardValue>
          </Card>

          <ButtonNext color="primary" onClick={() => undefined} fullWidth css={{ marginTop: 15 }}>
            <Link
              href={link}
              style={{
                alignItems: 'center',
                display: 'flex',
                flex: 1,
                height: 48,
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
              target="_blank"
            >
              INICIAR PESQUISA <IconRight color="white" size={24} />
            </Link>
          </ButtonNext>
        </Card>
      </TwoColorsContainer>
    </Page>
  );
};
