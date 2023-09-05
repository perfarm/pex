import { FC, useMemo } from 'react';

import { ScheduleCard } from '~/components/ScheduleCard';
import { ScheduleTimeline } from '~/components/SheduleTimeline';
import { BodyContent, Container, HeaderCardProduct, HeaderContent, Root, ScheduleList, Subtitle, Title } from './style';
import { Props } from './types';

export const ScreenSchedule: FC<Props> = ({ user, sheduleList }) => {
  const userFirstName = useMemo(() => (user?.name ? user?.name?.split(' ')[0] : ''), [user]);

  return (
    <Root>
      <HeaderContent>
        <Container>
          <Title color="$white" variant="$headline6" weight="$bold">
            Bem-vindo, {userFirstName}!
          </Title>
          <Subtitle color="$white" variant="$body4" weight="$medium">
            Sua produção escolhida foi:
          </Subtitle>
          <HeaderCardProduct image={user?.production.image} name={user?.production.name} isActive />
        </Container>
      </HeaderContent>
      <BodyContent>
        <Container>
          <Title variant="$headline6">Programação do Evento</Title>
          <Subtitle variant="$body5" weight="$medium">
            Fique atento aos horários para aproveitar ao máximo cada experiência do evento.
          </Subtitle>
          <ScheduleList>
            {sheduleList?.map((schedule, index) => (
              <ScheduleTimeline
                key={`shedule-item-${index}`}
                status={schedule.status}
                zIndex={sheduleList.length - index}
              >
                <ScheduleCard schedule={schedule} />
              </ScheduleTimeline>
            ))}
          </ScheduleList>
        </Container>
      </BodyContent>
    </Root>
  );
};
