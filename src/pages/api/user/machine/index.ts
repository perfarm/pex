import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getUserByRequest } from '~/commons/backend/getUserByRequest';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { findById } from '~/commons/firebase/machines';
import { saveMachine } from '~/commons/firebase/users';

const save = async (req: NextApiRequest, res: NextApiResponse) => {
  const { machineId } = req.body;

  try {
    const user = await getUserByRequest(req);
    const machine = await findById(machineId);

    await saveMachine(user.id, machine);

    res.status(HttpStatusCode.Ok).json({ machine });
  } catch (e) {
    showReqErrorLog('SAVE MACHINE ERROR', e, req);

    res.status(HttpStatusCode.BadRequest).json({ message: 'Erro ao salvar sua máquina, chame um adiminstrador para te ajudar' });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') return save(req, res);

  res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
}
