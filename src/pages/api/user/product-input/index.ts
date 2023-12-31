import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getUserByRequest } from '~/commons/backend/getUserByRequest';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { find } from '~/commons/firebase/features';
import { findById } from '~/commons/firebase/production-inputs';
import { saveProductionInput } from '~/commons/firebase/users';

const save = async (req: NextApiRequest, res: NextApiResponse) => {
  const { productInputId } = req.body;

  try {
    const feature = await find();
    if (!feature.SELECT_PRODUCTION_INPUT) {
      res.status(HttpStatusCode.BadRequest).json({ message: 'A funcionalidade de selecionar insumo ainda não foi liberada' });
      return;
    }

    const user = await getUserByRequest(req);
    const productInput = await findById(productInputId);

    await saveProductionInput(user.id, productInput);

    res.status(HttpStatusCode.Ok).json(productInput);
  } catch (e) {
    showReqErrorLog('SAVE PRODUCTION INPUT ERROR', e, req);

    res.status(HttpStatusCode.BadRequest).json({ message: 'Erro ao salvar seu insumo, chame um adiminstrador para te ajudar' });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') return save(req, res);

  res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
}
