import { HttpStatusCode } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getUserByRequest } from '~/commons/backend/getUserByRequest';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { find } from '~/commons/firebase/features';
import { findById } from '~/commons/firebase/productions';
import { saveProduction } from '~/commons/firebase/users';

const save = async (req: NextApiRequest, res: NextApiResponse) => {
  const { productionId } = req.body;

  try {
    const feature = await find();
    if (!feature.SELECT_PRODUCTION) {
      res.status(HttpStatusCode.BadRequest).json({ message: 'A funcionalidade de selecionar produção ainda não foi liberada' });
      return;
    }

    const user = await getUserByRequest(req);
    const production = await findById(productionId);

    await saveProduction(user.id, production);

    res.status(HttpStatusCode.Ok).json({ production });
  } catch (e) {
    showReqErrorLog('SAVE PRODUCTION ERROR', e, req);

    res.status(HttpStatusCode.BadRequest).json({ message: 'Erro ao salvar sua produção, chame um adiminstrador para te ajudar' });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') return save(req, res);

  res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
}
