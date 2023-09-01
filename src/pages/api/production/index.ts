import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { find } from '~/commons/firebase/productions';

const fetch = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const productions = await find();
    res.status(HttpStatusCode.Ok).json(productions);
  } catch (e) {
    showReqErrorLog('FETCH PRODUCTIONS ERROR', e, req);
    res.status(HttpStatusCode.BadRequest).json({ message: 'Erro ao buscar produçÕes, chame um adiminstrador para te ajudar' });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') return fetch(req, res);

  res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
}
