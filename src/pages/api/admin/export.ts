import { HttpStatusCode } from 'axios';
import type { NextApiRequest } from 'next';
import stream from 'stream';
import { promisify } from 'util';

import { getAdminUserByRequest } from '~/commons/backend/getUserByRequest';
import { showReqErrorLog } from '~/commons/backend/showReqErrorLog';
import { find } from '~/commons/firebase/users';

import { ADMIN_USER_NAME } from '~/pages/api/admin/login';
import { ResponseWithSocket } from '~/pages/api/socket';

const pipeline = promisify(stream.pipeline);

export default async function handler(req: NextApiRequest, res: ResponseWithSocket) {
  if (req.method !== 'GET') {
    res.status(HttpStatusCode.MethodNotAllowed).json({ message: 'Método não disponível' });
    return;
  }

  let username: string;

  try {
    username = getAdminUserByRequest(req).username;

    if (username !== ADMIN_USER_NAME) {
      res.status(HttpStatusCode.Unauthorized).json({ message: 'Unauthorized' });
      return;
    }
  } catch (e) {
    showReqErrorLog('FETCH USERS ERROR', e, req);
    res.status(HttpStatusCode.Unauthorized).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const users = await find();

    res.setHeader('Content-Type', 'application/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=users.csv');

    const data = users
      .sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      })
      .map((user) => `${user.name},${user.email},${user.cpf},${user.phone},${user.production?.name || ''},${user.productionInput?.name || ''},${user.machine?.name || ''}`)
      .reduce((prev, cur) => `${prev}\n${cur}`, 'name,email,cpf,phone,producao,insumo,maquina\n');

    await pipeline(data, res);
  } catch (e) {
    showReqErrorLog('DOWNLOAD CSV ERROR', e, req);
    res.status(HttpStatusCode.BadRequest).json({ message: 'Erro ao exportar usuários, chame um adiminstrador para te ajudar' });
  }
}
