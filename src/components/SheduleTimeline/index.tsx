import { FC, memo, useMemo } from 'react';
import { ChatText, Check, HourglassMedium } from '~/components/Icons';
import { IconContent, IconSpace, Root } from './style';
import { Props } from './types';

const RootScheduleTimeline: FC<Props> = ({ status, children, zIndex }) => {
  const iconType = useMemo(() => {
    if (status === 'FINALIZED') {
      return <Check color="white" />;
    }
    if (status === 'IN_PROGRESS') {
      return <ChatText color="white" />;
    }
    if (status === 'PENDING') {
      return <HourglassMedium color="white" />;
    }
  }, [status]);

  return (
    <Root status={status} css={{ zIndex }}>
      <IconSpace>
        <IconContent>{iconType}</IconContent>
      </IconSpace>
      {children}
    </Root>
  );
};

export const ScheduleTimeline = memo(RootScheduleTimeline);
