import { FilterQuery, UpdateQuery } from "mongoose";
import posModel ,{posDocument} from "../model/pos.model";

export const getPos = async (query: FilterQuery<posDocument>) => {
  try {
    return await posModel.find(query).lean().select("-__v");
  } catch (e) {
    throw new Error(e);
  }
};

export const addPos = async (body: posDocument) => {
  try {
    return await new posModel(body).save();
  } catch (e) {
    throw new Error(e);
  }
};

export const updatePos = async (
  query: FilterQuery<posDocument>,
  body: UpdateQuery<posDocument>
) => {
  try {
    await posModel.updateMany(query, body);
    return await posModel.find(query).lean();
  } catch (e) {
    throw new Error(e);
  }
};

export const deletePos = async (query: FilterQuery<posDocument>) => {
  try {
    let Pos = await posModel.find(query);
    if (!Pos) {
      throw new Error("No Pos with that id");
    }
    return await posModel.deleteMany(query);
  } catch (e) {
    throw new Error(e);
  }
};
