import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';

import { find } from '~/commons/firebase/features';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
    return;
  }

  try {
    const feature = await find();
    delete (feature as any).id;

    res.status(HttpStatusCode.Ok).json(feature);
  } catch (e) {
    showReqErrorLog('FETCH FEATURE ERROR', e, req);
    res.status(HttpStatusCode.InternalServerError).json({ message: 'Erro ao buscar as funcionalidades do app, chame um admin para lhe ajudar' });
  }
}
