import { HttpStatusCode } from 'axios';
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
    res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
    return;
  }

  const { password, username }: Body = req.body;
  if (password !== PASSWORD || username !== ADMIN_USER_NAME) {
    res.status(HttpStatusCode.BadRequest).json({ message: 'Usuário ou senha inválido' });
    return;
  }

  const token = generateAdmin(username);
  res.status(HttpStatusCode.Ok).json({ token });
}
