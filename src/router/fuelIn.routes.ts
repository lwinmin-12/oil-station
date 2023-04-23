import {
  addFuelInHandler,
  deleteFuelInHandler,
  getFuelInHandler,
  updateFuelInHandler,
} from "../controller/fuelIn.controller";
const fuelInRoute = require("express").Router();

fuelInRoute.get("/", getFuelInHandler);
fuelInRoute.post("/", addFuelInHandler);
fuelInRoute.patch("/", updateFuelInHandler);
fuelInRoute.delete("/", deleteFuelInHandler);

export default fuelInRoute
