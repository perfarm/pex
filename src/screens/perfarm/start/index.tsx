import useDidMount from 'beautiful-react-hooks/useDidMount';
import usePreviousValue from 'beautiful-react-hooks/usePreviousValue';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSocketEvent } from 'socket.io-react-hook';
import { RequestError } from '~/commons/api/RequestError';
import { fetchFeature } from '~/commons/api/fetchFeature';
import { Feature } from '~/commons/firebase/features/types';
import { SocketEvent } from '~/commons/socket/events';
import { CardContainer, IconRight, ImageResponsive } from '~/commons/variants/components';
import { Loader } from '~/components/Loader';
import { Spinner } from '~/components/Spinner';
import { TemplatePerfarm } from '~/components/TemplatePerfarm';
import { toast } from '~/components/Toaster';
import { useAuth } from '~/context/auth/useAuth';
import { Message } from '~/hooks/useReleaseSocketWithStorage';
import { Br, Description, Title } from './style';

export const ScreenPerfarmStart = () => {
  const [loading, setLoading] = useState(true);
  const [featureFectched, setFeatureFectched] = useState(false);
  const [feature, setFeature] = useState<Feature>();
  const [disableBtnNext, setDisableBtnNext] = useState(true);
  const { lastMessage = {} as Message } = useSocketEvent<Message>(SocketEvent.RELEASE_FEARURE);
  const oldReleasevalue = usePreviousValue(lastMessage.feature?.SELECT_PRODUCTION_INPUT);

  const { user } = useAuth();
  const { push } = useRouter();

  const next = useCallback(() => {
    if (!feature || !user) return;

    if (feature.SELCET_MACHINE && !user.machine && !!user.productionInput) {
      push('/perfarm/machine');
      return;
    }

    if (feature.FINISH && !user.feature.FINISH && !!user.machine && !!user.productionInput) {
      push('/perfarm/finish');
      return;
    }
  }, [feature, user, push]);

  const handleNext = useCallback(
    (feature: Feature) => {
      if (!user) return;

      if (feature.SELECT_PRODUCTION_INPUT && !user.productionInput) {
        push('/perfarm/product-input');
        return;
      }

      next();
    },
    [push, user, next]
  );

  useEffect(next, [feature, push, user, next]);

  useEffect(() => {
    if (!feature || !user) {
      setDisableBtnNext(true);
      return;
    }

    if (feature.SELECT_PRODUCTION_INPUT) {
      if (!!user.productionInput) {
        if (feature.SELCET_MACHINE) {
          if (!!user.machine) {
            setDisableBtnNext(!feature.FINISH);
          } else {
            setDisableBtnNext(false);
          }
        } else {
          setDisableBtnNext(true);
        }
      } else {
        setDisableBtnNext(false);
      }
    } else {
      setDisableBtnNext(true);
    }
  }, [feature, user]);

  useEffect(() => {
    if (
      lastMessage.action === 'ENABLED' &&
      lastMessage.feature.SELECT_PRODUCTION_INPUT &&
      oldReleasevalue !== lastMessage.feature.SELECT_PRODUCTION_INPUT
    ) {
      setDisableBtnNext(false);
    }
    if (
      lastMessage.action === 'DISABLED' &&
      !lastMessage.feature.SELECT_PRODUCTION_INPUT &&
      oldReleasevalue !== lastMessage.feature.SELECT_PRODUCTION_INPUT
    ) {
      setDisableBtnNext(true);
    }
  }, [lastMessage, oldReleasevalue]);

  useDidMount(async () => {
    try {
      const resp = await fetchFeature();

      handleNext(resp);
      setFeature(resp);
    } catch (e) {
      toast.error((e as RequestError).message);
    } finally {
      setLoading(false);
      setFeatureFectched(true);
    }
  });

  const nextBtnText = useMemo(() => (user?.productionInput ? 'CONTINUAR' : 'COMEÇAR'), [user]);

  if (!featureFectched || !user) {
    return <Loader position="fixed">Buscando dados...</Loader>;
  }

  return (
    <TemplatePerfarm
      handleNext={() => handleNext(feature)}
      isBtnNextDisabled={disableBtnNext || loading}
      isBtnNextLoading={loading}
      btnNextDescription={
        featureFectched && disableBtnNext ? (
          <>{loading ? <Spinner /> : 'AGUARDANDO LIBERAÇÃO'}</>
        ) : (
          <>
            {nextBtnText} <IconRight color="white" size={24} />
          </>
        )
      }
    >
      <CardContainer>
        <ImageResponsive src="/static/imgs/screen-forest-1.png" alt="Tópicos informativos" width={526} height={328} />
      </CardContainer>
      <Title color="$pastureGreen" variant="$headline6">
        CONHECENDO MAIS A PERFARM
      </Title>
      <Description color="$gray" variant="$body4">
        Esta breve simulação representa apenas uma introdução ao uso da Perfarm, uma pequena amostra das suas vastas
        capacidades de gestão. É apenas uma prévia do que esta ferramenta é capaz de proporcionar.
        <Br />
        <Br />
        Prepare-se para vivenciar o poder das decisões estratégicas e conte com nosso apoio a cada passo.
        <Br />
        <Br />
        Vamos começar!
      </Description>
    </TemplatePerfarm>
  );
};
