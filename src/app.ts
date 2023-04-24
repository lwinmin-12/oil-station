import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import config from "config";
import cors from "cors";
import fileUpload from "express-fileupload";
import userRoute from "./router/user.routes";
import fuelInRoute from "./router/fuelIn.routes";
import gasRoute from "./router/gas.routes";
import dailySaleRoute from "./router/dailySale.routes";
import nozzleRoute from "./router/nozzle.routes";
import posRoute from "./router/pos.routes";
import testRoute from "./router/test.routes";
import mqtt from "mqtt";
import { updateNozzleBySerialNo } from "./service/nozzle.service";

const app = express();
app.use(express.json());
app.use(fileUpload());
app.use(cors({ origin: "*" }));
const server = require("http").createServer(app);

//require data

const port = config.get<number>("port");
const host = config.get<string>("host");
const dbUrl = config.get<string>("dbUrl");

//mongodb connection

mongoose.connect(dbUrl);

//mqtt connection

export const client = mqtt.connect(
  "mqtts://f98a3730d6c3454b8cbf7d6c4f13cb69.s1.eu.hivemq.cloud",
  {
    username: "lmo-12",
    password: "Asdffdsa-4580",
  }
);

let sub_topic = "general";

const connect = () => {
  client.subscribe("#", { qos: 0 }, function (err) {
    if (err) {
      console.log("An error occurred while subscribing");
    } else {
      console.log("Subscribed successfully to " + sub_topic.toString());
    }
  });
};

client.on("connect", connect);

//topic come from mqtt

client.on("message", async (topic, message) => {
  // console.log(topic, "///", message.toString());
  let income = message.toString();
  let ar = income.split("");
  console.log(ar)
  if (ar[0] == "1") {
    updateNozzleBySerialNo({ _id: "6442e3e540669ddab7a5d278" }, "1");
  }
  if (ar[1] == "1") {
    updateNozzleBySerialNo({ _id: "64435433d1961d7b72e27104" }, "2");
  }
  if (ar[2] == "1") {
    updateNozzleBySerialNo({ _id: "64435445d1961d7b72e27106" }, "3");
  }
  if (ar[3] == "1") {
    updateNozzleBySerialNo({ _id: "6443544ed1961d7b72e27108" }, "4");
  }
});

// request routes

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("ok");
});

//app => routes => controller => service => model

app.use("/user", userRoute);
app.use("/fuelIn", fuelInRoute);
app.use("/nozzle", nozzleRoute);
app.use("/gas", gasRoute);
app.use("/daily-sale", dailySaleRoute);
app.use("/pos", posRoute);
app.use("/test", testRoute);

//Error Routes

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  err.status = err.status || 409;
  res.status(err.status).json({
    con: false,
    msg: err.message,
  });
});

// create server

server.listen(port, () =>
  console.log(`server is running in  http://${host}:${port}`)
);
