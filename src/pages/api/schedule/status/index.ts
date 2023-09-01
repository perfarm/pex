import { HttpStatusCode } from 'axios';
import type { NextApiRequest } from 'next';

import { getAdminUserByRequest } from '~/commons/backend/getUserByRequest';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { find, findById, updateStatus as firebaseUpdateStatus } from '~/commons/firebase/schedules';
import { Status } from '~/commons/firebase/schedules/types';
import { SocketEvent } from '~/commons/socket/events';
import { ScheduleMessage } from '~/components/UserWebSocket/types';

import { ADMIN_USER_NAME } from '~/pages/api/admin/login';
import { ResponseWithSocket } from '~/pages/api/socket';

type Body = {
  id: string;
  status: Status;
}

const updateStatus = async (req: NextApiRequest, res: ResponseWithSocket) => {
  let username: string;

  try {
    username = getAdminUserByRequest(req).username;

    if (username !== ADMIN_USER_NAME) {
      res.status(HttpStatusCode.Unauthorized).json({ message: 'Unauthorized' });
      return;
    }
  } catch (e) {
    showReqErrorLog('ENABLED SCHEDULE ERROR', e, req);

    res.status(HttpStatusCode.Unauthorized).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const { id, status } = req.body as Body;

    const before = await findById(id);
    const schedule = await firebaseUpdateStatus(id, status);
    const all = await find();
    const nextIndex = all.findIndex((s) => s.id === id) + 1;

    const response: ScheduleMessage = {
      action: 'STATUS_CHANGED',
      id,
      oldStatus: before.status,
      newStatus: status,
      schedule,
      nextEvent: all[nextIndex],
    };

    if (res.socket.server.io) res.socket.server.io.emit(SocketEvent.RELEASE_SCHEDULE, response);

    res.status(HttpStatusCode.Ok).json(response);
  } catch (e) {
    showReqErrorLog('ENABLED SCHEDULE ERROR', e, req);

    res.status(HttpStatusCode.BadRequest).json({ message: 'Erro ao liberar cronograma, chame um adiminstrador para te ajudar' });
  }
}

export default async function handler(req: NextApiRequest, res: ResponseWithSocket) {
  if (req.method === 'POST') return updateStatus(req, res);

  res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
}
