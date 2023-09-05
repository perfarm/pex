import { Schedule } from '~/commons/firebase/schedules/types';
import { User } from '~/commons/firebase/users/types';

export interface Props {
  loading?: boolean;
  refreshLoading?: boolean;
  user: User;
  sheduleList: Schedule[];
  refresh?: () => Promise<void>;
}
