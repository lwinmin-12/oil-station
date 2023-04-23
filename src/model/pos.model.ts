import mongoose, { Schema } from "mongoose";

export interface posInput {
  nozzleId: string;
  oilType: string;
  currentLiter: number;
  stopedLiter: number;
}

export interface posDocument extends posInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const posSchema = new Schema(
  {
    nozzleId: { type: String, requierd: true },
    oilType: { type: String, required: true },
    liter: { type: Number, requierd: true },
    cost: { type: Number, default: 0 },
    carNo: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

const posModel = mongoose.model<posDocument>("pos", posSchema);

export default posModel;
