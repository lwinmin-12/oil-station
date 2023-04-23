import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface fuelInDocument extends mongoose.Document {
    driver: string;
    bowser: string;
    fuelName: string;
    tank: string;
    station: string;
    recieveVolume: number;
    date: Date;
}

const fuelInSchema = new Schema({
  driver: { type: String, required: true },
  bowser: { type: String, required: true },
  fuelName: { type: String, required: true },
  tank: { type: String, required: true },
  station: { type: String, required: true },
  recieveVolume: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const fuelInModel = mongoose.model<fuelInDocument>('fuelIn' , fuelInSchema)

export default fuelInModel;