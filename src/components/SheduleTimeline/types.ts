import { PropsWithChildren } from 'react';
import { Status } from '~/commons/firebase/schedules/types';

export interface Props extends PropsWithChildren {
  status: Status;
  zIndex: number;
}
