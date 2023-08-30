import { HttpStatusCode } from 'axios';
import type { NextApiRequest } from 'next';

import { getAdminUserByRequest } from '~/commons/backend/getUserByRequest';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { release as releaseFeature } from '~/commons/firebase/features';
import { SocketEvent } from '~/commons/socket/events';
import { Release } from '~/commons/storage/release/types';

import { ADMIN_USER_NAME } from '~/pages/api/admin/login';
import { ResponseWithSocket } from '~/pages/api/socket';

type Body = {
  feature: keyof typeof Release;
}

const release = async (req: NextApiRequest, res: ResponseWithSocket) => {
  let username: string;
  try {
    username = getAdminUserByRequest(req).username;

    if (username !== ADMIN_USER_NAME) {
      res.status(HttpStatusCode.Unauthorized).json({ message: 'Unauthorized' });
      return;
    }
  } catch (e) {
    showReqErrorLog('RELEASE FEATURE ERROR', e, req);

    res.status(HttpStatusCode.Unauthorized).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const { feature } = req.body as Body;
    const response: any = { feature, socketEnabled: !!res.socket.server.io };

    await releaseFeature(feature);

    if (res.socket.server.io) res.socket.server.io.emit(SocketEvent.RELEASE_FEARURE, { feature });

    response.message = 'Funcionalidade liberada';

    res.status(HttpStatusCode.Ok).json(response);
  } catch (e) {
    showReqErrorLog('RELEASE FEATURE ERROR', e, req);

    res.status(HttpStatusCode.BadRequest).json({ message: 'Erro ao liberar funcionalidade, chame um adiminstrador para te ajudar' });
  }
}

export default async function handler(req: NextApiRequest, res: ResponseWithSocket) {
  if (req.method === 'POST') return release(req, res);

  res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
}
