import { Request, Response, NextFunction } from "express";
import fMsg from "../utils/helper";
import {
  getDailySale,
  addDailySale,
  updateDailySale,
  deleteDailySale,
} from "../service/dailySale.service";

export const getDailySaleHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await getDailySale(req.query);
    fMsg(res, "DailySale are here", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const addDailySaleHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await addDailySale(req.body);
    fMsg(res, "New DailySale data was added", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const updateDailySaleHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // if(req.body)
    // console.log(req.body.totalAmount)
    let result = await updateDailySale(req.query, req.body);
    fMsg(res, "updated DailySale data", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const deleteDailySaleHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteDailySale(req.query);
    fMsg(res, "DailySale data was deleted");
  } catch (e) {
    next(new Error(e));
  }
};
