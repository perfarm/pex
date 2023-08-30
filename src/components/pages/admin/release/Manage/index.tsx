import { FC, useState } from 'react';
import { Release, translate } from '~/commons/storage/release/types';

import { useReleaseSocketWithStorage } from '~/hooks/useReleaseSocketWithStorage';

import useDidMount from 'beautiful-react-hooks/useDidMount';
import { RequestError } from '~/commons/api/RequestError';
import { fetchFeature } from '~/commons/api/fetchFeature';
import { Feature } from '~/commons/firebase/features/types';
import { Card } from '~/components/Card';
import { Spinner } from '~/components/Spinner';
import { Switch } from '~/components/Switch';
import { toast } from '~/components/Toaster';
import { Typography } from '~/components/Typography';
import { Col, LabelContainer, Page, Row, SwitchContainer, TitleContainer } from './style';

export const Manage: FC = () => {
  const [loading, setLoading] = useState(false);
  const [itemClicked, setItemClicked] = useState<keyof Feature>();
  const { disableFeature, enableFeature } = useReleaseSocketWithStorage();
  const [feature, setFeature] = useState<Feature>({
    FINISH: false,
    REGISTER: false,
    SELCET_MACHINE: false,
    SELECT_PRODUCTION: false,
    SELECT_PRODUCTION_INPUT: false,
  });

  useDidMount(async () => {
    try {
      const resp = await fetchFeature();
      setFeature(resp);
    } catch (e) {
      toast.error((e as RequestError).data.data);
    } finally {
      setLoading(false);
    }
  });

  const enable = async (feature: keyof typeof Release) => {
    const state = confirm(`Deseja realmente ativar a funcionalidade ${translate(feature)}`);
    if (!state) return;

    setLoading(true);
    setItemClicked(feature);

    try {
      await enableFeature({ feature });
      setFeature((prev) => ({
        ...prev,
        [feature]: true,
      }));
      toast.success(`Funcionalidade ${translate(feature)} ativada`);
    } catch (e) {
      toast.error((e as RequestError).data.data);
    } finally {
      setLoading(false);
      setItemClicked(undefined);
    }
  };

  const disable = async (feature: keyof typeof Release) => {
    const state = confirm(`Deseja realmente desativar a funcionalidade ${translate(feature)}`);
    if (!state) return;

    setLoading(true);
    setItemClicked(feature);

    try {
      await disableFeature({ feature });
      setFeature((prev) => ({
        ...prev,
        [feature]: false,
      }));
      toast.success(`Funcionalidade ${translate(feature)} desativada`);
    } catch (e) {
      toast.error((e as RequestError).data.data);
    } finally {
      setLoading(false);
      setItemClicked(undefined);
    }
  };

  return (
    <Page>
      <TitleContainer>
        <Typography variant="$headline1">Painel ADMIN</Typography>
      </TitleContainer>

      <Row>
        <Col>
          <Card style={{ padding: 30 }}>
            <TitleContainer>
              <Typography variant="$headline4">Liberar Funcionalidades</Typography>
            </TitleContainer>

            <SwitchContainer>
              <Switch
                checked={feature.REGISTER}
                disabled={loading}
                id="register-swith"
                label={
                  <LabelContainer>
                    <span>Liberar página de registro</span>
                    {itemClicked === 'REGISTER' && <Spinner color="pastureGreen" />}
                  </LabelContainer>
                }
                onChange={() => {
                  if (feature.REGISTER) disable('REGISTER');
                  else enable('REGISTER');
                }}
              />
            </SwitchContainer>
            <SwitchContainer>
              <Switch
                checked={feature.SELECT_PRODUCTION}
                disabled={loading}
                id="production-swith"
                label={
                  <LabelContainer>
                    <span>Liberar página de produções</span>
                    {itemClicked === 'SELECT_PRODUCTION' && <Spinner color="pastureGreen" />}
                  </LabelContainer>
                }
                onChange={() => {
                  if (feature.SELECT_PRODUCTION) disable('SELECT_PRODUCTION');
                  else enable('SELECT_PRODUCTION');
                }}
              />
            </SwitchContainer>

            <SwitchContainer>
              <Switch
                checked={feature.SELECT_PRODUCTION_INPUT}
                disabled={loading}
                id="production-input-swith"
                label={
                  <LabelContainer>
                    <span>Liberar página de insumos</span>
                    {itemClicked === 'SELECT_PRODUCTION_INPUT' && <Spinner color="pastureGreen" />}
                  </LabelContainer>
                }
                onChange={() => {
                  if (feature.SELECT_PRODUCTION_INPUT) disable('SELECT_PRODUCTION_INPUT');
                  else enable('SELECT_PRODUCTION_INPUT');
                }}
              />
            </SwitchContainer>

            <SwitchContainer>
              <Switch
                checked={feature.SELCET_MACHINE}
                disabled={loading}
                id="machine-swith"
                label={
                  <LabelContainer>
                    <span>Liberar página de máquinas</span>
                    {itemClicked === 'SELCET_MACHINE' && <Spinner color="pastureGreen" />}
                  </LabelContainer>
                }
                onChange={() => {
                  if (feature.SELCET_MACHINE) enable('SELCET_MACHINE');
                  else disable('SELCET_MACHINE');
                }}
              />
            </SwitchContainer>

            <SwitchContainer>
              <Switch
                checked={feature.FINISH}
                disabled={loading}
                id="finish-swith"
                label={
                  <LabelContainer>
                    <span>Liberar página de finalizar</span>
                    {itemClicked === 'FINISH' && <Spinner color="pastureGreen" />}
                  </LabelContainer>
                }
                onChange={() => {
                  if (feature.FINISH) disable('FINISH');
                  else enable('FINISH');
                }}
              />
            </SwitchContainer>
          </Card>
        </Col>

        <Col>
          <Card style={{ padding: 30 }}>
            <TitleContainer>
              <Typography variant="$headline4">Usuários cadastrados</Typography>
            </TitleContainer>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};
