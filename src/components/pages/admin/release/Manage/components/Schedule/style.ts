import { Table as OrignalTable } from "rsuite-table";
import { styled } from "~/theme";

export const Table = styled(OrignalTable, {
  '& .pending-row p': {
    color: '$resourceYellowDark',
  },
  '& .in-progress-row p': {
    color: '$pastureGreen',
  },
})
