
import { NextApiRequest } from "next";

import { findById } from "~/commons/firebase/users";
import { extract } from "~/commons/jwt";

const extractToken = (req: NextApiRequest) => {
  const { authorization } = req.headers;
  return extract(authorization.replace('Bearer', '').trim());
}

export const getUserByRequest = async (req: NextApiRequest) => {
  const { id } = extractToken(req);
  return findById(id);
}

export const getAdminUserByRequest = (req: NextApiRequest) => {
  const { username } = extractToken(req);
  return { username } as { username: string };
}