import { PropsWithChildren } from "react";
import { Schedule, Status } from "~/commons/firebase/schedules/types";

export interface Props extends PropsWithChildren { };

export interface ScheduleMessage {
  action: 'STATUS_CHANGED',
  id: string;
  schedule: Schedule;
  nextEvent: Schedule;
  oldStatus: Status;
  newStatus: Status;
}