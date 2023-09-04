import moment from 'moment';
import { FC, useMemo } from 'react';

import { Card } from '~/components/Card';
import { Row } from '~/components/Grid';
import { Typography } from '~/components/Typography';

import { translate } from '~/commons/firebase/schedules/types';

import { Colors } from '~/commons/types';
import { User } from '../Icons/User';
import { SpeakerCol, SpeakerIconCol, StatusCol, TimeCol } from './style';
import { Props } from './types';

export const ScheduleCard: FC<Props> = ({ actionComponent, schedule }) => {
  const titleColor = useMemo<Colors>(
    () => (schedule.status === 'FINALIZED' ? '$mediumGray' : '$gray'),
    [schedule.status]
  );

  const timeColor = useMemo<Colors>(() => {
    if (schedule.status === 'FINALIZED') return '$mediumGray';
    if (schedule.status === 'IN_PROGRESS') return '$pastureGreen';

    return '$resourceYellow';
  }, [schedule.status]);

  const time = useMemo(() => {
    const [, minutes] = schedule.time.split(':');
    const format = minutes !== '00' ? 'H[h]mm' : 'H[h]';

    return moment(schedule.time, 'HH:mm:ss').format(format);
  }, [schedule.time]);

  return (
    <Card style={{ padding: 15 }}>
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

      {schedule.hasAction && <div style={{ marginTop: 5 }}>{actionComponent}</div>}

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
