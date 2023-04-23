import { FilterQuery, UpdateQuery } from "mongoose";
import dailySaleModel, { dailySaleDocument } from "../model/dailySale.model";
import { getGas } from "./gas.service";

export const getDailySale = async (query: FilterQuery<dailySaleDocument>) => {
  try {
    let result = await dailySaleModel.find(query).lean().select("-__v");
    if (!result) {
      throw new Error();
    }
    await Promise.all(
      result.map(async (ea) => {
        let gas = await getGas({ daliySaleId: ea["_id"] });
        let totalAmount = gas
          .map((ea) => ea["amount"])
          .reduce((pv: number, cv: number):number => pv + cv);
        ea["gas"] = gas;
        ea["totalAmount"] = totalAmount;
        return ea;
      })
    );

    return result;
  } catch (e) {
    throw new Error(e);
  }
};

export const addDailySale = async (body: dailySaleDocument) => {
  try {
    return await new dailySaleModel(body).save();
  } catch (e) {
    throw new Error(e);
  }
};

export const updateDailySale = async (
  query: FilterQuery<dailySaleDocument>,
  body: UpdateQuery<dailySaleDocument>
) => {
  try {
    await dailySaleModel.updateMany(query, body);
    return await dailySaleModel.find(query).lean();
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteDailySale = async (
  query: FilterQuery<dailySaleDocument>
) => {
  try {
    let DailySale = await dailySaleModel.find(query);
    if (!DailySale) {
      throw new Error("No DailySale with that id");
    }
    return await dailySaleModel.deleteMany(query);
  } catch (e) {
    throw new Error(e);
  }
};
