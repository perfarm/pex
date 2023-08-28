import useDidMount from "beautiful-react-hooks/useDidMount";
import { useCallback, useEffect, useState } from "react";
import { useSocketEvent } from "socket.io-react-hook";
import { releaseFeature } from "~/commons/api/releaseFeature";
import { SocketResponse } from "~/commons/api/releaseFeature/types";
import { SocketEvent } from "~/commons/socket/events";
import { getReleaseValue, setReleaseValue } from "~/commons/storage/release";
import { Release } from "~/commons/storage/release/types";

export interface Message {
  feature: keyof typeof Release,
}

export interface SendData {
  feature: keyof typeof Release;
}

export type Features = {
  [K in keyof typeof Release]: boolean;
}

type Response = {
  features?: Features;
  currentFeatureIndex?: number;
  sendMessage: (message: SendData) => Promise<SocketResponse>;
}

const getCurrentIndex = () => {
  const finishInStorage = getReleaseValue('FINISH');
  if (finishInStorage) return Release.FINISH;

  const selectMachineInStorage = getReleaseValue('SELCET_MACHINE');
  if (selectMachineInStorage) return Release.SELCET_MACHINE;

  const selectProductionInStorage = getReleaseValue('SELECT_PRODUCTION');
  if (selectProductionInStorage) return Release.SELECT_PRODUCTION;

  const selectProductionInputInStorage = getReleaseValue('SELECT_PRODUCTION_INPUT');
  if (selectProductionInputInStorage) return Release.SELECT_PRODUCTION_INPUT;

  return Release.REGISTER;
}

export const useReleaseSocketWithStorage = () => {
  const { lastMessage = {} as Message } = useSocketEvent<Message>(SocketEvent.RELEASE_FEARURE);

  const sendMessage = useCallback((release: SendData) => releaseFeature(release.feature), []);

  const [response, setResponse] = useState<Response>({
    currentFeatureIndex: Release.REGISTER,
    features: {
      FINISH: false,
      REGISTER: false,
      SELCET_MACHINE: false,
      SELECT_PRODUCTION: false,
      SELECT_PRODUCTION_INPUT: false,
    },
    sendMessage,
  });

  useDidMount(() => {
    const finishInStorage = getReleaseValue('FINISH');
    const registerInInStorage = getReleaseValue('REGISTER');
    const selectMachineInStorage = getReleaseValue('SELCET_MACHINE');
    const selectProductionInStorage = getReleaseValue('SELECT_PRODUCTION');
    const selectProductionInputInStorage = getReleaseValue('SELECT_PRODUCTION_INPUT');

    setResponse((prev) => ({
      ...prev,
      currentFeatureIndex: getCurrentIndex(),
      features: {
        FINISH: finishInStorage,
        REGISTER: registerInInStorage,
        SELCET_MACHINE: selectMachineInStorage,
        SELECT_PRODUCTION: selectProductionInStorage,
        SELECT_PRODUCTION_INPUT: selectProductionInputInStorage,
      },
    }));
  });

  useEffect(() => {
    if (lastMessage?.feature) {
      setReleaseValue(lastMessage.feature);

      setResponse((prev) => ({
        ...prev,
        currentFeatureIndex: getCurrentIndex(),
        features: {
          ...prev.features,
          [lastMessage.feature]: true,
        },
      }));
    }
  }, [lastMessage.feature]);

  return response;
}

