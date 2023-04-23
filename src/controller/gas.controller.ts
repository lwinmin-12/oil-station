import { Request, Response, NextFunction } from "express";
import fMsg from "../utils/helper";
import { getGas, addGas, updateGas, deleteGas } from "../service/gas.service";

export const getGasHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await getGas(req.query);
    fMsg(res, "Gas are here", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const addGasHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await addGas(req.body);
    fMsg(res, "New Gas data was added", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const updateGasHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.stopLiter) {
      let gas = await getGas(req.query);
      let amount = req.body.stopLiter - gas[0]["startLiter"];
      req.body["amount"] = amount;
    }
    let result = await updateGas(req.query, req.body);
    fMsg(res, "updated Gas data", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const deleteGasHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteGas(req.query);
    fMsg(res, "Gas data was deleted");
  } catch (e) {
    next(new Error(e));
  }
};
