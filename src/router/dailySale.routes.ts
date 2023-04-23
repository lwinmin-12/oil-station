import {
  getDailySaleHandler,
  addDailySaleHandler,
  updateDailySaleHandler,
  deleteDailySaleHandler,
} from "../controller/dailySale.controller";
const dailySaleRoute = require("express").Router();

dailySaleRoute.get("/", getDailySaleHandler);
dailySaleRoute.post("/", addDailySaleHandler);
dailySaleRoute.patch("/", updateDailySaleHandler);
dailySaleRoute.delete("/", deleteDailySaleHandler);

export default dailySaleRoute;
