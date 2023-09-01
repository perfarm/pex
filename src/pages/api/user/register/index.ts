import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { create, findByCPF } from '~/commons/firebase/users';
import { generate } from '~/commons/jwt';

type Body = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
    return;
  }

  const body: Body = req.body;
  let user = await findByCPF(body.cpf);

  const userAlreadyExists = !!user;
  const resp: any = {};

  if (!userAlreadyExists) user = await create(body);

  const token = generate(user.id);
  resp.token = token;

  if (userAlreadyExists && body.email !== user.email) {
    resp.message = 'Já existe um usuário com este CPF';
  }

  res.status(HttpStatusCode.Ok).json(resp);
}
