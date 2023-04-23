import { NextFunction , Response , Request } from "express";
import { checkToken } from '../utils/helper';
import { getUser } from '../service/user.service';

export const validateAll =
   (schema: any) =>
  async (req: Request, res: Response, next: NextFunction) => {

    try {
      let result = await schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
     return next()
    } catch (e: any) {
      return next(new Error(e.errors[0].message))
    }
  };
export const validateToken =async (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization?.split(' ')[1]

  if(!token) {
    return next(new Error("invalid token"))
  }
  try{
    let decoded =  checkToken(token)
    let user = await getUser({_id :decoded._id})
    req.body.user = user
  }catch(e : any){
    return next(new Error(e))
  }
  next()
}
