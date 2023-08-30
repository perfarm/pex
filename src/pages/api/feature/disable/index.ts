import { HttpStatusCode } from 'axios';
import type { NextApiRequest } from 'next';

import { getAdminUserByRequest } from '~/commons/backend/getUserByRequest';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { disable as disableFeature } from '~/commons/firebase/features';
import { SocketEvent } from '~/commons/socket/events';
import { Release } from '~/commons/storage/release/types';

import { ADMIN_USER_NAME } from '~/pages/api/admin/login';
import { ResponseWithSocket } from '~/pages/api/socket';

type Body = {
  feature: keyof typeof Release;
}

const disable = async (req: NextApiRequest, res: ResponseWithSocket) => {
  let username: string;
  try {
    username = getAdminUserByRequest(req).username;

    if (username !== ADMIN_USER_NAME) {
      res.status(HttpStatusCode.Unauthorized).json({ message: 'Unauthorized' });
      return;
    }
  } catch (e) {
    showReqErrorLog('DISABLE FEATURE ERROR', e, req);

    res.status(HttpStatusCode.Unauthorized).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const { feature: releasedFeature } = req.body as Body;
    const response: any = { releasedFeature, socketEnabled: !!res.socket.server.io };

    const feature = await disableFeature(releasedFeature);
    delete (feature as any).id;

    response.message = 'Funcionalidade desabilitada';
    response.action = 'DISABLED';
    response.feature = feature;

    if (res.socket.server.io) res.socket.server.io.emit(SocketEvent.RELEASE_FEARURE, response);

    res.status(HttpStatusCode.Ok).json(response);
  } catch (e) {
    showReqErrorLog('DISABLE FEATURE ERROR', e, req);

    res.status(HttpStatusCode.BadRequest).json({ message: 'Erro ao desabilitar funcionalidade, chame um adiminstrador para te ajudar' });
  }
}

export default async function handler(req: NextApiRequest, res: ResponseWithSocket) {
  if (req.method === 'POST') return disable(req, res);

  res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
}
