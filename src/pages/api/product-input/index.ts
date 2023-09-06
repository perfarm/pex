import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { find } from '~/commons/firebase/production-inputs';

const fetch = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const productionInput = await find();
    res.status(HttpStatusCode.Ok).json(productionInput);
  } catch (e) {
    showReqErrorLog('FETCH PRODUCTION INPUT ERROR', e, req);
    res.status(HttpStatusCode.BadRequest).json({ message: 'Erro ao buscar insumos, chame um adiminstrador para te ajudar' });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') return fetch(req, res);

  res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
}
