import usePreviousValue from "beautiful-react-hooks/usePreviousValue";
import { useCallback, useEffect, useState } from "react";
import { useSocketEvent } from "socket.io-react-hook";
import { disableFeature as apiDisableFeature } from "~/commons/api/disableFeature";
import { releaseFeature } from "~/commons/api/releaseFeature";
import { SocketResponse } from "~/commons/api/releaseFeature/types";
import { SocketEvent } from "~/commons/socket/events";
import { getReleaseValue, setReleaseValue } from "~/commons/storage/release";
import { Release } from "~/commons/storage/release/types";

export type Action = 'ENABLED' | 'DISABLED';

export interface Message {
  action: Action;
  feature: Features;
  message?: string;
  releasedFeature: keyof typeof Release,
}

export interface SendData {
  feature: keyof typeof Release;
}

export type Features = {
  [K in keyof typeof Release]: boolean;
}

export interface Response extends Message {
  action: Action;
  currentFeatureIndex?: number;
  disableFeature: (message: SendData) => Promise<SocketResponse>;
  enableFeature: (message: SendData) => Promise<SocketResponse>;
}

export type Current = { key: keyof typeof Release } & { index: number }

const getCurrentIndex = (): Current => {
  const finishInStorage = getReleaseValue('FINISH');
  if (finishInStorage) return { index: Release.FINISH, key: 'FINISH' };

  const selectMachineInStorage = getReleaseValue('SELCET_MACHINE');
  if (selectMachineInStorage) return { index: Release.SELCET_MACHINE, key: 'SELCET_MACHINE' };

  const selectProductionInStorage = getReleaseValue('SELECT_PRODUCTION');
  if (selectProductionInStorage) return { index: Release.SELECT_PRODUCTION, key: 'SELECT_PRODUCTION' };

  const selectProductionInputInStorage = getReleaseValue('SELECT_PRODUCTION_INPUT');
  if (selectProductionInputInStorage) return { index: Release.SELECT_PRODUCTION_INPUT, key: 'SELECT_PRODUCTION_INPUT' };

  return { index: Release.REGISTER, key: 'REGISTER' };
}

const getInitialState = (): Omit<Response, 'action' | 'disableFeature' | 'enableFeature'> => {
  const finishInStorage = getReleaseValue('FINISH');
  const registerInInStorage = getReleaseValue('REGISTER');
  const selectMachineInStorage = getReleaseValue('SELCET_MACHINE');
  const selectProductionInStorage = getReleaseValue('SELECT_PRODUCTION');
  const selectProductionInputInStorage = getReleaseValue('SELECT_PRODUCTION_INPUT');
  const current = getCurrentIndex();

  return {
    currentFeatureIndex: current.index,
    releasedFeature: current.key,
    feature: {
      FINISH: finishInStorage,
      REGISTER: registerInInStorage,
      SELCET_MACHINE: selectMachineInStorage,
      SELECT_PRODUCTION: selectProductionInStorage,
      SELECT_PRODUCTION_INPUT: selectProductionInputInStorage,
    },
  }
}

export const useReleaseSocketWithStorage = () => {
  const { lastMessage = {} as Message, } = useSocketEvent<Message>(SocketEvent.RELEASE_FEARURE);
  const oldReleasedFeature = usePreviousValue(lastMessage.releasedFeature);

  const enableFeature = useCallback((release: SendData) => releaseFeature(release.feature), []);

  const disableFeature = useCallback((release: SendData) => apiDisableFeature(release.feature), []);

  const [response, setResponse] = useState<Response>({ action: undefined, ...getInitialState(), disableFeature, enableFeature });

  useEffect(() => {
    if (lastMessage.action && oldReleasedFeature !== lastMessage?.releasedFeature) {
      setReleaseValue(lastMessage.releasedFeature);

      setResponse((prev) => ({
        ...prev,
        ...lastMessage,
        currentFeatureIndex: Release[lastMessage.releasedFeature],
      }));
    }
  }, [oldReleasedFeature, lastMessage]);

  return response;
}

