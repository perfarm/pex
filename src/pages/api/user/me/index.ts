import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getUserByRequest } from '~/commons/backend/getUserByRequest';
import { User } from '~/commons/firebase/users/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<User | { message: string }>) {
  if (req.method !== 'GET') {
    res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
    return;
  }

  const user = await getUserByRequest(req);

  res.status(HttpStatusCode.Ok).json(user);
}
