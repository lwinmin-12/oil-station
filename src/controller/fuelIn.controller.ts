import { Request, Response, NextFunction } from "express";
import fMsg from "../utils/helper";
import { getFuelIn , addFuelIn ,updateFuelIn ,deleteFuelIn } from "../service/fuelIn.service";

export const getFuelInHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await getFuelIn(req.query);
    fMsg(res, "FuelIn are here", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const addFuelInHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await addFuelIn(req.body);
    fMsg(res, "New FuelIn data was added", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const updateFuelInHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await updateFuelIn(req.query, req.body);
    fMsg(res, "updated FuelIn data", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const deleteFuelInHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteFuelIn(req.query);
    fMsg(res, "FuelIn data was deleted");
  } catch (e) {
    next(new Error(e));
  }
};
