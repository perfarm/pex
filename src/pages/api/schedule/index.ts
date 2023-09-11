import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';

import { find } from '~/commons/firebase/schedules';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
    return;
  }

  try {
    const schedules = await find();
    res.status(HttpStatusCode.Ok).json(schedules);
  } catch (e) {
    showReqErrorLog('FETCH SCHEDULE ERROR', e, req);
    res.status(HttpStatusCode.InternalServerError).json({ message: 'Erro ao buscar o cronograma, chame um admin para lhe ajudar' });
  }
}
