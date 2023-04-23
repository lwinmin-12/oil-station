import { FilterQuery, UpdateQuery } from "mongoose";
import gasModel, { gasDocument } from "../model/gas.model";

export const getGas = async (query: FilterQuery<gasDocument>) => {
  try {
    // console.log(query)
    return await gasModel.find(query).lean().select("-__v");
  } catch (e) {
    throw new Error(e);
  }
};

export const addGas = async (body: gasDocument) => {
  try {
    return await new gasModel(body).save();
  } catch (e) {
    throw new Error(e);
  }
};

export const updateGas = async (
  query: FilterQuery<gasDocument>,
  body: UpdateQuery<gasDocument>
) => {
  try {
    await gasModel.updateMany(query, body);
    return await gasModel.find(query).lean();
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteGas = async (query: FilterQuery<gasDocument>) => {
  try {
    let Gas = await gasModel.find(query);
    if (!Gas) {
      throw new Error("No Gas with that id");
    }
    return await gasModel.deleteMany(query);
  } catch (e) {
    throw new Error(e);
  }
};
