import { FC, useMemo } from 'react';
import { BottomTab } from '~/components/BottomTab';
import { BodyContent, Container, HeaderCardProduct, HeaderContent, Root, Subtitle, Title } from './style';
import { Props } from './types';

export const ScreenSchedule: FC<Props> = ({ user }) => {
  const userFirstName = useMemo(() => {
    if (!user?.name) {
      return '';
    }

    return user?.name?.split(' ')[0];
  }, [user]);

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
        </Container>

        {/* Timeline... */}
        {/* Timeline... */}
        {/* Timeline... */}
      </BodyContent>

      <BottomTab />
    </Root>
  );
};
