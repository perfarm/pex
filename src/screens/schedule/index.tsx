import { FC, useEffect, useMemo } from 'react';

import { Url } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';
import { Schedule } from '~/commons/firebase/schedules/types';
import { User } from '~/commons/firebase/users/types';
import { Col } from '~/components/Grid';
import { Loader } from '~/components/Loader';
import { ScheduleCard } from '~/components/ScheduleCard';
import { ScheduleTimeline } from '~/components/SheduleTimeline';
import { IconLoading } from '../admin/release/Manage/components/Users/style';
import {
  BodyContent,
  Container,
  HeaderCardProduct,
  HeaderContent,
  RefreshButton,
  Root,
  Row,
  ScheduleList,
  Subtitle,
  Title,
  TwoColorsContainer,
} from './style';
import { Props } from './types';

interface Action {
  disable: (schedule: Schedule) => boolean;
  text: string;
  action: (user: User) => void;
}

const getAction = (id: string, push: (url: Url, as?: Url) => Promise<boolean>): Action => {
  if (id === 'nPy9j3JVRikJJoHJi9NL') {
    return {
      action: (user: User) => push(!!user.productionInput ? '/perfarm' : '/perfarm/production-input'),
      disable: (schedule: Schedule) => schedule.status === 'PENDING',
      text: 'IR PARA EXPERIÊNCIA',
    };
  }

  if (id === 'JaD4fMMdfkkt7DBiHs6h') {
    return {
      action: (user: User) => push(!!user.machine ? '/perfarm' : '/perfarm/machine'),
      disable: (schedule: Schedule) => schedule.status === 'PENDING',
      text: 'IR PARA EXPERIÊNCIA',
    };
  }

  if (id === 'N26HcAUGJgOU0ZSGtYve') {
    return {
      action: () => push('/seedz-farm'),
      disable: () => false,
      text: 'CONHECER SEEDZ FARM',
    };
  }

  if (id === 'otJfSrds8444q7NGznuT') {
    return {
      action: () => push('/farm-insights'),
      disable: () => false,
      text: 'CONHECER FARM INSIGHTS',
    };
  }
};

export const ScreenSchedule: FC<Props> = ({ loading, user, sheduleList, refresh, refreshLoading }) => {
  const userFirstName = useMemo(() => (user?.name ? user?.name.split(' ')[0] : ''), [user]);
  const { push } = useRouter();

  useEffect(() => {
    const schedule = sheduleList.find((s) => s.status === 'IN_PROGRESS');

    if (schedule) {
      const interval = setInterval(() => {
        const element = document.getElementById(`schedule-${schedule.id}`);
        if (!element) return;

        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        clearInterval(interval);
      }, 100);
    }
  }, [sheduleList]);

  return (
    <Root>
      <TwoColorsContainer>
        <Container>
          <Row>
            <Col>
              <Title color="$white" variant="$headline6" weight="$bold">
                Bem-vindo, {userFirstName}!
              </Title>
              <Subtitle color="$white" variant="$body4" weight="$medium">
                Sua produção escolhida foi:
              </Subtitle>
            </Col>

            <Col style={{ alignItems: 'center', display: 'flex', flex: 0 }}>
              <RefreshButton color="white" onClick={refresh}>
                <IconLoading color="white" loading={loading || refreshLoading} size={24} />
              </RefreshButton>
            </Col>
          </Row>

          <HeaderContent>
            <HeaderCardProduct image={user?.production.image} name={user?.production.name} isActive />
          </HeaderContent>
        </Container>

        <BodyContent>
          <Container>
            <Title variant="$headline6">Programação do Evento</Title>

            <Subtitle variant="$body5" weight="$medium">
              Fique atento aos horários para aproveitar ao máximo cada experiência do evento.
            </Subtitle>

            {loading && !sheduleList.length ? (
              <div style={{ marginTop: 30 }}>
                <Loader position="static">Carregando programação...</Loader>
              </div>
            ) : (
              <ScheduleList>
                {sheduleList.map((schedule, index) => {
                  const action = getAction(schedule.id, push);

                  return (
                    <ScheduleTimeline
                      key={`shedule-item-${index}`}
                      status={schedule.status}
                      zIndex={sheduleList.length - index}
                      position={index}
                      total={sheduleList.length}
                    >
                      <ScheduleCard
                        schedule={schedule}
                        actionText={action?.text}
                        disableAction={action?.disable(schedule)}
                        onAction={action?.action ? () => action.action(user) : undefined}
                      />
                    </ScheduleTimeline>
                  );
                })}
              </ScheduleList>
            )}
          </Container>
        </BodyContent>
      </TwoColorsContainer>
    </Root>
  );
};
