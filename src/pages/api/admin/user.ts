import { HttpStatusCode } from 'axios';
import type { NextApiRequest } from 'next';

import { getAdminUserByRequest } from '~/commons/backend/getUserByRequest';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { find } from '~/commons/firebase/users';

import { ADMIN_USER_NAME } from '~/pages/api/admin/login';
import { ResponseWithSocket } from '~/pages/api/socket';

const fetchUsers = async (req: NextApiRequest, res: ResponseWithSocket) => {
  let username: string;

  try {
    username = getAdminUserByRequest(req).username;

    if (username !== ADMIN_USER_NAME) {
      res.status(HttpStatusCode.Unauthorized).json({ message: 'Unauthorized' });
      return;
    }
  } catch (e) {
    showReqErrorLog('FETCH USERS ERROR', e, req);
    res.status(HttpStatusCode.Unauthorized).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const users = await find();
    res.status(HttpStatusCode.Ok).json(users);
  } catch (e) {
    showReqErrorLog('FETCH USERS ERROR', e, req);
    res.status(HttpStatusCode.BadRequest).json({ message: 'Erro ao liberar funcionalidade, chame um adiminstrador para te ajudar' });
  }
}

export default async function handler(req: NextApiRequest, res: ResponseWithSocket) {
  if (req.method === 'GET') return fetchUsers(req, res);

  res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
}
