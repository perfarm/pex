import useDidMount from "beautiful-react-hooks/useDidMount";
import { useCallback, useEffect, useState } from "react";
import { useSocketEvent } from "socket.io-react-hook";
import { releaseFeature } from "~/commons/api/releaseFeature";
import { SocketResponse } from "~/commons/api/releaseFeature/types";
import { SocketEvent } from "~/commons/socket/events";
import { getReleaseValue, setReleaseValue } from "~/commons/storage/release";
import { Release } from "~/commons/storage/release/types";

export interface Message {
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
  currentFeatureIndex?: number;
  sendMessage: (message: SendData) => Promise<SocketResponse>;
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

export const useReleaseSocketWithStorage = () => {
  const { lastMessage = {} as Message } = useSocketEvent<Message>(SocketEvent.RELEASE_FEARURE);

  const sendMessage = useCallback((release: SendData) => releaseFeature(release.feature), []);

  const [response, setResponse] = useState<Response>({
    currentFeatureIndex: Release.REGISTER,
    feature: {
      FINISH: false,
      REGISTER: false,
      SELCET_MACHINE: false,
      SELECT_PRODUCTION: false,
      SELECT_PRODUCTION_INPUT: false,
    },
    releasedFeature: 'REGISTER',
    sendMessage,
  });

  useDidMount(() => {
    const finishInStorage = getReleaseValue('FINISH');
    const registerInInStorage = getReleaseValue('REGISTER');
    const selectMachineInStorage = getReleaseValue('SELCET_MACHINE');
    const selectProductionInStorage = getReleaseValue('SELECT_PRODUCTION');
    const selectProductionInputInStorage = getReleaseValue('SELECT_PRODUCTION_INPUT');

    setResponse((prev) => {
      const current = getCurrentIndex();

      return {
        ...prev,
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
    });
  });

  useEffect(() => {
    if (lastMessage?.releasedFeature) {
      setReleaseValue(lastMessage.releasedFeature);

      setResponse((prev) => {
        const current = getCurrentIndex();

        return {
          ...prev,
          ...lastMessage,
          currentFeatureIndex: current.index,
          releasedFeature: current.key,
        };
      });
    }
  }, [lastMessage]);

  return response;
}

