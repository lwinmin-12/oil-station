import {
  getGasHandler,
  addGasHandler,
  updateGasHandler,
  deleteGasHandler,
} from "../controller/gas.controller";
const gasRoute = require("express").Router();

gasRoute.get("/", getGasHandler);
gasRoute.post("/", addGasHandler);
gasRoute.patch("/", updateGasHandler);
gasRoute.delete("/", deleteGasHandler);

export default gasRoute;
