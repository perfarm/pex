import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getUserByRequest } from '~/commons/backend/getUserByRequest';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { findById } from '~/commons/firebase/production-inputs';
import { saveProductionInput } from '~/commons/firebase/users';

const save = async (req: NextApiRequest, res: NextApiResponse) => {
  const { productionInputId } = req.body;

  try {
    const user = await getUserByRequest(req);
    const productionInput = await findById(productionInputId);

    await saveProductionInput(user.id, productionInput);

    res.status(HttpStatusCode.Ok).json({ productionInput });
  } catch (e) {
    showReqErrorLog('SAVE PRODUCTION INPUT ERROR', e, req);

    res.status(HttpStatusCode.BadRequest).json({ message: 'Erro ao salvar seu insumo, chame um adiminstrador para te ajudar' });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') return save(req, res);

  res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
}
