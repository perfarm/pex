import { NextApiRequest } from "next";

export const showReqErrorLog = (msg: string, e: any, req: NextApiRequest, additional?: any) => {
  console.log(msg);
  console.log('BODY: ', req.body);
  console.log('TOKEN: ', req.headers.authorization)
  console.log('ADDITIONAL: ', additional);
  console.log(e);
}
