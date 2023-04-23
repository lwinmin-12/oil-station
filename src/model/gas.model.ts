import mongoose from "mongoose";
import { Schema } from "mongoose";
import { dailySaleDocument } from "./dailySale.model";

export interface gasDocument extends mongoose.Document {
  daliySaleId: dailySaleDocument["id"];
  gasType: string;
  startLiter: number;
  stopLiter: number;
  price: number;
  amount: number;
  date: Date;
}

const gasSchema = new Schema({
  daliySaleId: { type: Schema.Types.ObjectId,  required: true },
  gasType: { type: String, requierd: true },
  startLiter: { type: Number, default: 0 },
  stopLiter: { type: Number, default: 0 },
  price : { type: Number, default: 0 },
  amount: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

const gasModel = mongoose.model("gas", gasSchema);

export default gasModel;
