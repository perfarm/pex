import { HttpStatusCode } from 'axios';
import type { NextApiRequest } from 'next';

import { getAdminUserByRequest } from '~/commons/backend/getUserByRequest';
import { release } from '~/commons/firebase/steps';
import { SocketEvent } from '~/commons/socket/events';
import { Release } from '~/commons/storage/release/types';

import { ADMIN_USER_NAME } from '~/pages/api/admin/login';
import { ResponseWithSocket } from '~/pages/api/socket';

type Response = {
  message: string
}

type Body = {
  feature: keyof typeof Release;
}

export default async function handler(
  req: NextApiRequest,
  res: ResponseWithSocket<Response>
) {
  if (req.method !== 'POST') {
    res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
    return;
  }

  const { username } = getAdminUserByRequest(req);

  if (username !== ADMIN_USER_NAME) {
    res.status(HttpStatusCode.Unauthorized).json({ message: 'Unauthorized' });
    return;
  }

  if (res.socket.server.io) {
    const { feature } = req.body as Body;

    await release(feature);

    res.socket.server.io.emit(SocketEvent.RELEASE_FEARURE, { feature });
  }

  res.end()
}
