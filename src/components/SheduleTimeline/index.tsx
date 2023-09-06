import { FC, memo, useMemo } from 'react';
import { ChatText, Check, HourglassMedium } from '~/components/Icons';
import { IconContent, IconSpace, LineDown, LineUp, Root } from './style';
import { Props } from './types';

const RootScheduleTimeline: FC<Props> = ({ status, children, zIndex, position, total }) => {
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
        {position !== 0 && <LineUp status={status} />}
        <IconContent>{iconType}</IconContent>
        {position !== total - 1 && <LineDown status={status} />}
      </IconSpace>
      <div style={{ paddingTop: 15, flex: 1, width: 200 }}>{children}</div>
    </Root>
  );
};

export const ScheduleTimeline = memo(RootScheduleTimeline);
