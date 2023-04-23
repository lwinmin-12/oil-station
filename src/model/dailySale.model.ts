import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface dailySaleDocument extends mongoose.Document {
  stationId: string;
  date: Date;
  tottalAmount: number;
}

const dailySaleSchema = new Schema({
  stationId: { type: Schema.Types.ObjectId, required: true },
  date: { type: Date, default: Date.now },
  
  totalAmount: { type: Number, default: 0 },
});

const dailySaleModel = mongoose.model<dailySaleDocument>(
  "dailySale",
  dailySaleSchema
);

export default dailySaleModel;
