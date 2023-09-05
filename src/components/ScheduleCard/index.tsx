import moment from 'moment';
import { FC, useMemo } from 'react';

import { Card } from '~/components/Card';
import { Row } from '~/components/Grid';
import { Typography } from '~/components/Typography';

import { translate } from '~/commons/firebase/schedules/types';

import { Colors } from '~/commons/types';
import { ButtonColor } from '../Button/types';
import { CaretRight } from '../Icons';
import { User } from '../Icons/User';
import { ActionButton, SpeakerCol, SpeakerIconCol, StatusCol, TimeCol } from './style';
import { Props } from './types';

export const ScheduleCard: FC<Props> = ({ actionText, onAction, schedule, disableAction }) => {
  const titleColor = useMemo<Colors>(
    () => (schedule.status === 'FINALIZED' ? '$mediumGray' : '$gray'),
    [schedule.status]
  );

  const timeColor = useMemo<Colors>(() => {
    if (schedule.status === 'FINALIZED') return '$mediumGray';
    if (schedule.status === 'IN_PROGRESS') return '$pastureGreen';

    return '$resourceYellow';
  }, [schedule.status]);

  const buttonColor = useMemo<ButtonColor>(() => {
    if (schedule.status === 'FINALIZED') return 'gray';
    if (schedule.status === 'IN_PROGRESS') return 'primary';

    return 'secondary';
  }, [schedule.status]);

  const time = useMemo(() => {
    const [, minutes] = schedule.time.split(':');
    const format = minutes !== '00' ? 'H[h]mm' : 'H[h]';

    return moment(schedule.time, 'HH:mm:ss').format(format);
  }, [schedule.time]);

  return (
    <Card style={{ padding: 15 }} id={`schedule-${schedule.id}`}>
      <Row>
        <TimeCol>
          <Typography color={timeColor} variant="$body4" weight="$bold">
            {time}
          </Typography>
        </TimeCol>
        <StatusCol>
          <Typography color={timeColor} variant="$body4" weight="$bold">
            {translate(schedule.status)}
          </Typography>
        </StatusCol>
      </Row>

      <div style={{ marginTop: 5 }}>
        <Typography color={titleColor} variant="$body4" weight="$bold">
          {schedule.title}
        </Typography>
      </div>

      {schedule.description && (
        <div style={{ marginTop: 5 }}>
          <Typography color={titleColor} variant="$body6">
            {schedule.description}
          </Typography>
        </div>
      )}

      {schedule.hasAction && (
        <div style={{ marginTop: 5 }}>
          <ActionButton onClick={onAction} color={buttonColor} variant="outlined" size="sm" disabled={disableAction}>
            <span style={{ marginRight: 5 }}>{actionText}</span>
            <CaretRight color={timeColor.replace('$', '') as any} />
          </ActionButton>
        </div>
      )}

      {schedule.speaker && (
        <Row style={{ marginTop: 5 }}>
          <SpeakerIconCol>
            <User color={timeColor.replace('$', '') as any} />
          </SpeakerIconCol>
          <SpeakerCol>
            <Typography color={titleColor} variant="$body6">
              {schedule.speaker}
            </Typography>
          </SpeakerCol>
        </Row>
      )}
    </Card>
  );
};
