import { Message } from "~/hooks/useReleaseSocketWithStorage";

export interface SocketResponse extends Message {
  socketEnabled: boolean;
}
