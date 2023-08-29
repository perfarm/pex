import { JwtPayload, decode, sign } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export const generate = (id: string) => sign({ id }, JWT_SECRET);

export const extract = (token: string) => decode(token) as JwtPayload;

export const generateAdmin = (username: string) => sign({ username }, JWT_SECRET);
