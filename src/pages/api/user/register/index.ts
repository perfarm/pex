import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { create, findByCPF } from '~/commons/firebase/users';
import { generate } from '~/commons/jwt';

type Body = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
};

async function register(req: NextApiRequest, res: NextApiResponse) {
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

  return resp;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
    return;
  }

  try {
    const resp = await register(req, res);
    res.status(HttpStatusCode.Ok).json(resp);
  } catch (e) {
    showReqErrorLog('REGISTER ERROR', e, req);
    res.status(HttpStatusCode.InternalServerError).json({ message: 'Erro ao salvar seus dados, chame um admin para lhe ajudar' });
  }
}
