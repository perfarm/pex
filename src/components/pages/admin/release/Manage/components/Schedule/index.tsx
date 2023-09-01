import { FC, useMemo, useState } from 'react';
import { Release, translate } from '~/commons/storage/release/types';

import { useReleaseSocketWithStorage } from '~/hooks/useReleaseSocketWithStorage';

import useDidMount from 'beautiful-react-hooks/useDidMount';
import { RequestError } from '~/commons/api/RequestError';
import { fetchFeature } from '~/commons/api/fetchFeature';
import { Feature as FeatureDef } from '~/commons/firebase/features/types';
import { Card } from '~/components/Card';
import { Spinner } from '~/components/Spinner';
import { Switch } from '~/components/Switch';
import { toast } from '~/components/Toaster';
import { Typography } from '~/components/Typography';
import { LabelContainer, SwitchContainer, TitleContainer } from '~/components/pages/admin/release/Manage/style';

export const Schedule: FC = () => {
  const [loading, setLoading] = useState(false);
  const [firstLoading, setFirstLoading] = useState(false);
  const [itemClicked, setItemClicked] = useState<keyof FeatureDef>();
  const { disableFeature, enableFeature } = useReleaseSocketWithStorage();
  const [feature, setFeature] = useState<FeatureDef>({
    FINISH: false,
    REGISTER: false,
    SELCET_MACHINE: false,
    SELECT_PRODUCTION: false,
    SELECT_PRODUCTION_INPUT: false,
  });
  const disableSwitch = useMemo(() => loading || firstLoading, [firstLoading, loading]);

  useDidMount(async () => {
    setFirstLoading(true);

    try {
      const resp = await fetchFeature();
      setFeature(resp);
    } catch (e) {
      toast.error((e as RequestError).data.data);
    } finally {
      setFirstLoading(false);
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
    <Card style={{ padding: 30 }}>
      <TitleContainer>
        <Typography variant="$headline4">Atualizar Cronograma</Typography>
      </TitleContainer>

      <SwitchContainer>
        <Switch
          checked={feature.REGISTER}
          disabled={disableSwitch}
          id="register-swith"
          label={
            <LabelContainer>
              <span>Liberar página de registro</span>
              {(itemClicked === 'REGISTER' || firstLoading) && <Spinner color="pastureGreen" />}
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
          disabled={disableSwitch}
          id="production-swith"
          label={
            <LabelContainer>
              <span>Liberar página de produções</span>
              {(itemClicked === 'SELECT_PRODUCTION' || firstLoading) && <Spinner color="pastureGreen" />}
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
          disabled={disableSwitch}
          id="production-input-swith"
          label={
            <LabelContainer>
              <span>Liberar página de insumos</span>
              {(itemClicked === 'SELECT_PRODUCTION_INPUT' || firstLoading) && <Spinner color="pastureGreen" />}
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
          disabled={disableSwitch}
          id="machine-swith"
          label={
            <LabelContainer>
              <span>Liberar página de máquinas</span>
              {(itemClicked === 'SELCET_MACHINE' || firstLoading) && <Spinner color="pastureGreen" />}
            </LabelContainer>
          }
          onChange={() => {
            if (feature.SELCET_MACHINE) disable('SELCET_MACHINE');
            else enable('SELCET_MACHINE');
          }}
        />
      </SwitchContainer>

      <SwitchContainer>
        <Switch
          checked={feature.FINISH}
          disabled={disableSwitch}
          id="finish-swith"
          label={
            <LabelContainer>
              <span>Liberar página de finalizar</span>
              {(itemClicked === 'FINISH' || firstLoading) && <Spinner color="pastureGreen" />}
            </LabelContainer>
          }
          onChange={() => {
            if (feature.FINISH) disable('FINISH');
            else enable('FINISH');
          }}
        />
      </SwitchContainer>
    </Card>
  );
};
