import { PropsWithChildren } from 'react';
import { Status } from '~/commons/firebase/schedules/types';

export interface Props extends PropsWithChildren {
  lineDownStatus: Status;
  lineUpStatus: Status;
  status: Status;
  zIndex: number;
  position: number;
  total: number;
}
