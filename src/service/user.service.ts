import { FilterQuery, UpdateQuery } from "mongoose";
import userModel, { UserInput, UserDocument } from "../model/user.model";
import { compass, createToken } from "../utils/helper";

export const registerUser = async (payload: UserInput) => {
  try {
    let result = await userModel.create(payload);
    let userObj: Partial<UserDocument> = result.toObject();
    delete userObj.password;
    return userObj;
  } catch (e) {
    throw new Error(e);
  }
};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    let user = await userModel
      .findOne({ email })
      .select("-__v");

    if (!user || !compass(password, user.password)) {
      throw new Error("Creditial Error");
    }

    let userObj: Partial<UserDocument> = user.toObject();
    userObj["token"] = createToken(userObj);

    delete userObj.password;

    return userObj;
  } catch (e) {
    throw new Error(e);
  }
};

export const getUser = async (query: FilterQuery<UserDocument>) => {
  try {
    return await userModel
      .find(query)
      .lean()
      .select("-password -__v");
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteUser = async (query: FilterQuery<UserDocument>) => {
  try {
    return await userModel.deleteMany(query);
  } catch (e) {
    throw new Error(e);
  }
};