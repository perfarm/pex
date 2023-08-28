// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { SocketEvent } from '~/commons/socket/events';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests allowed' });
    return;
  }

  if (res.socket.server.io) {
    const { feature } = req.body;
    res.socket.server.io.emit(SocketEvent.RELEASE_FEARURE, { feature });
  }

  res.end()
}
