// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { User } from '~/commons/api/fetchCurrentUser/types';
import { getUserByRequest } from '~/commons/backend/getUserByRequest';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | { message: string }>
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Only GET requests allowed' });
    return;
  }

  const user = await getUserByRequest(req);

  res.status(200).json(user);
}
