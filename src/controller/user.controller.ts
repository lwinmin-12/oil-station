import { Request, Response, NextFunction } from "express";

import {
  deleteUser,
  getUser,
  loginUser,
  registerUser,
} from "../service/user.service";

import fMsg from "../utils/helper";

export const registerUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await registerUser(req.body);
    fMsg(res, "user registered", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const loginUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await loginUser(req.body);
    fMsg(res, "registered users", result);
  } catch (e) {
    next(e);
  }
};

export const getUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await getUser(req.body.user[0]._id);
    fMsg(res, "registered users", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const getUserByAdminHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await getUser(req.body.query);
    fMsg(res, "registered users", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const deleteUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await deleteUser(req.query);
    fMsg(res, "user deleted");
  } catch (e) {
    next(new Error(e));
  }
};
