import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { User } from '~/commons/api/fetchCurrentUser/types';
import { getUserByRequest } from '~/commons/backend/getUserByRequest';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | { message: string }>
) {
  if (req.method !== 'GET') {
    res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
    return;
  }

  const user = await getUserByRequest(req);

  res.status(HttpStatusCode.Ok).json(user);
}
