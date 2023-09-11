import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getUserByRequest } from '~/commons/backend/getUserByRequest';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { User } from '~/commons/firebase/users/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<User | { message: string }>) {
  if (req.method !== 'GET') {
    res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
    return;
  }

  try {
    const user = await getUserByRequest(req);
    res.status(HttpStatusCode.Ok).json(user);
  } catch (e) {
    showReqErrorLog('USER ME ERROR', e, req);
    res.status(HttpStatusCode.InternalServerError).json({ message: 'Erro ao buscar seus dados, chame um admin para lhe ajudar' });
  }
}
