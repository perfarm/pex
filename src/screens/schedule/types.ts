import { Schedule } from '~/commons/firebase/schedules/types';
import { User } from '~/commons/firebase/users/types';

export interface Props {
  user: User;
  sheduleList: Schedule[];
}
