import { Request, Response, NextFunction } from "express";
import fMsg from "../utils/helper";
import { getPos , updatePos ,deletePos, addPos } from "../service/pos.service";
import { getNozzle } from "../service/nozzle.service";

export const getPosHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await getPos(req.query);
    fMsg(res, "Pos are here", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const addPosHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if(req.body.manual){
      let nozzle =  getNozzle ({nozzleId : req.body.nozzleId})
      req.body.liter = nozzle[0].stopedLiter
      delete req.body.manual;
    }
    

    let result = await addPos(req.body);
    fMsg(res, "New Pos data was added", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const updatePosHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await updatePos(req.query, req.body);
    fMsg(res, "updated Pos data", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const deletePosHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deletePos(req.query);
    fMsg(res, "Pos data was deleted");
  } catch (e) {
    next(new Error(e));
  }
};
