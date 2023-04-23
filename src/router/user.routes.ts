const userRoute = require("express").Router();

import {
  deleteUserHandler,
  getUserByAdminHandler,
  getUserHandler,
  loginUserHandler,
  registerUserHandler,
} from "../controller/user.controller";

import {validateToken} from  '../middleware/validator'

userRoute.post("/register", registerUserHandler);
userRoute.post("/login", loginUserHandler);

userRoute.get("/admin", getUserByAdminHandler);

userRoute.get("/", validateToken, getUserHandler);

//beware deleting all user route
userRoute.delete(
  "/admin",
  validateToken,
  deleteUserHandler
);

//delete each user
userRoute.delete("/", validateToken, deleteUserHandler);

export default userRoute;
