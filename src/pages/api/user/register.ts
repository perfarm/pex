// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { create, findByEmail } from '~/commons/firebase/users';
import { generate } from '~/commons/jwt';

type Body = {
  name: string,
  email: string;
  cpf: string;
  phone: string;
}

type Response = { message: string } | { token: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests allowed' });
    return;
  }

  const body: Body = req.body;
  let user = await findByEmail(body.email);

  if (!user) user = await create(body);

  const token = generate(user.id);
  res.status(200).json({ token });
}
