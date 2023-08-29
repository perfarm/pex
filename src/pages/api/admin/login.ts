// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { generateAdmin } from '~/commons/jwt';

type Body = {
  username: string;
  password: string;
}

type Response = { message: string } | { token: string };

export const ADMIN_USER_NAME = 'pex-admin';
// const PASSWORD = '3%B7rkV^0B%8';
const PASSWORD = 'pex-admin';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests allowed' });
    return;
  }

  const { password, username }: Body = req.body;
  if (password !== PASSWORD || username !== ADMIN_USER_NAME) {
    res.status(400).json({ message: 'invalid username or password' });
    return;
  }

  const token = generateAdmin(username);
  res.status(200).json({ token });
}
