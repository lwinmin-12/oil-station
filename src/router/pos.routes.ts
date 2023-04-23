import {
  getPosHandler,
  addPosHandler,
  updatePosHandler,
  deletePosHandler,
} from "../controller/pos.controller";

const posRoute = require("express").Router();

posRoute.get("/", getPosHandler);
posRoute.post("/", addPosHandler);
posRoute.patch("/", updatePosHandler);
posRoute.delete("/", deletePosHandler);

export default posRoute;
