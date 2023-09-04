import { ReactNode } from "react";
import { Schedule } from "~/commons/firebase/schedules/types";

export interface Props {
  schedule: Schedule;
  actionComponent?: ReactNode;
}
