import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { find } from '~/commons/firebase/releases';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
    return;
  }

  const step = await find();

  res.status(HttpStatusCode.Ok).json(step);
}
