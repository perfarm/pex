import { HttpStatusCode } from 'axios';
import type { NextApiRequest } from 'next';

import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { create } from '~/commons/firebase/schedules';
import { Status } from '~/commons/firebase/schedules/types';

import { ResponseWithSocket } from '~/pages/api/socket';

type Body = {
  id: string;
  status: Status;
}

const updateStatus = async (req: NextApiRequest, res: ResponseWithSocket) => {
  try {
    const before = await create({
      // action: 'function',
      // description: 'No Farm Insights, você tem a oportunidade valiosa de compartilhar seus conhecimentos sobre o agro. Ao responder às perguntas, você será recompensado com moedas SDZ e terá acesso aos resultados agrupados das pesquisas. Sua participação não apenas traz recompensas, mas também contribui para o aprimoramento contínuo da comunidade.',
      order: 20,
      // hasAction: true,
      status: 'PENDING',
      time: '18:30:00',
      title: 'Encerramento',
      speaker: 'Luiz Roberto Sodré',
      // section: 'Todos os palestrantes',
    });

    res.status(HttpStatusCode.Ok).json(before);
  } catch (e) {
    showReqErrorLog('ENABLED SCHEDULE ERROR', e, req);

    res.status(HttpStatusCode.BadRequest).json({ message: 'Erro ao liberar cronograma, chame um adiminstrador para te ajudar' });
  }
}

export default async function handler(req: NextApiRequest, res: ResponseWithSocket) {
  if (req.method === 'POST') return updateStatus(req, res);

  res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
}
