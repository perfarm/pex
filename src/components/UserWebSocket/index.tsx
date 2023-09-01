import usePreviousValue from 'beautiful-react-hooks/usePreviousValue';
import { FC, useEffect } from 'react';
import { translate } from '~/commons/storage/release/types';
import { Toast, toast } from '~/components/Toaster';
import { useReleaseSocketWithStorage } from '~/hooks/useReleaseSocketWithStorage';

import { useSocketEvent } from 'socket.io-react-hook';
import { SocketEvent } from '~/commons/socket/events';
import { Typography } from '../Typography';
import { Props, ScheduleMessage } from './types';

export const UserWebSocket: FC<Props> = ({ children }) => {
  const { action: releasedFeatureAction, releasedFeature } = useReleaseSocketWithStorage();
  const { lastMessage: scheduleLastMessage = {} as ScheduleMessage } = useSocketEvent<ScheduleMessage>(
    SocketEvent.RELEASE_SCHEDULE
  );

  const oldReleasedFeature = usePreviousValue(releasedFeature);
  const oldScheduleId = usePreviousValue(scheduleLastMessage.id);

  // USADO PARA EXIBIR TOAST DE NOVA FEATURE
  useEffect(() => {
    if (oldReleasedFeature !== releasedFeature && releasedFeatureAction === 'ENABLED') {
      const name = translate(releasedFeature);

      toast.custom((t) => {
        t.message = (
          <Typography color="$white" variant="$body5">
            Nova funcionalidade liberada:
            <br />
            <Typography color="$white" tag="span" weight="$bold">
              {name}
            </Typography>
          </Typography>
        );

        return <Toast toast={t} />;
      });
    }
  }, [oldReleasedFeature, releasedFeature, releasedFeatureAction]);

  // USADO PARA EXIBIR TOAST DE ATUALIZAÇÃO DE CRONOGRAMA
  useEffect(() => {
    if (
      oldScheduleId !== scheduleLastMessage.id &&
      scheduleLastMessage.action === 'STATUS_CHANGED' &&
      scheduleLastMessage.newStatus === 'IN_PROGRESS'
    ) {
      toast.custom((t) => {
        t.message = (
          <Typography color="$white" variant="$body5">
            Cronograma atualizado, próximo evento:
            <br />
            <Typography color="$white" tag="span" weight="$bold">
              {scheduleLastMessage?.nextEvent?.title}
            </Typography>
          </Typography>
        );

        return <Toast toast={t} />;
      });
    }
  }, [
    oldScheduleId,
    scheduleLastMessage.action,
    scheduleLastMessage.id,
    scheduleLastMessage.newStatus,
    scheduleLastMessage?.nextEvent?.title,
  ]);

  return <div>{children}</div>;
};
