import { Schedule } from "~/commons/firebase/schedules/types";

export interface Props {
  schedule: Schedule;
  onAction?: () => void;
  actionText?: string;
  disableAction?: boolean;
}
