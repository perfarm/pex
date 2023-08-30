// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Socket } from 'net';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Server } from 'socket.io';

type Data = {
  name: string
}

interface CustomServer {
  io: Server;
}

interface CustomSocket extends Socket {
  server: CustomServer;
}

export interface ResponseWithSocket<T = any> extends NextApiResponse<T> {
  socket: CustomSocket
}

export default function handler(
  req: NextApiRequest,
  res: ResponseWithSocket<Data>
) {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server as any)
    res.socket.server.io = io

    io.on('connection', socket => {
      console.log('connection: ', socket.id);
    });
  }

  res.end()
}
