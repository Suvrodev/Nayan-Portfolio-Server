import bcrypt from "bcrypt";
import AppError from "../../errors/AppError";
import config from "../../config";
import { TAdmin } from "./admin.interface";
import { adminModel } from "./admin.model";

interface IPassword {
  oldPassword: string;
  newPassword: string;
}

///Create Admin into db
const registerAdminIntoDB = async (payload: TAdmin) => {
  console.log("Admin Payload: ", payload);
  const email = payload?.email;
  const res = await adminModel.findOne({ email: email });
  console.log(" Email Exists: ", res);
  if (res) {
    throw new AppError(409, "This Email Allready Exists");
  }
  const result = await adminModel.create(payload);
  return result;
};

//Get All Admin from DB
const getAllAdmin = async (search?: string) => {
  const filter: any = {};

  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { phone: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { studentId: { $regex: search, $options: "i" } },
    ];
  }

  const result = await adminModel.find(filter);
  return result;
};

//Get single Admin from DB
const getSingleAdminFromDB = async (email: string) => {
  // console.log("Email in service: ", email);
  const result = await adminModel.findOne({ email: email });
  return result;
};

//delete Admin from DB
const deleteAdmin = async (email: string) => {
  console.log("Delete email: ", email);
  try {
    const result = await adminModel.deleteOne({ email: email });
    return result;
  } catch (error) {
    throw new Error("Admin Not Found");
  }
};

//Update Password
const updatePasswordIntoDB = async (email: string, payload: IPassword) => {
  const { oldPassword, newPassword } = payload;
  console.log("------------------");
  console.log("User email: ", email);
  console.log("Old Password ", oldPassword);
  console.log("New  Password ", newPassword);

  //Checking  if the user is exist
  const isUserExists = await adminModel.findOne({ email: email });
  if (!isUserExists) {
    throw new AppError(404, "User not Found");
  }

  //Check Password is right or wrong
  // const isPasswordMatched = await bcrypt.compare(
  //   oldPassword,
  //   isUserExists?.password
  // );

  if (oldPassword !== isUserExists?.password) {
    throw new AppError(401, "Old password is not matched");
  }

  // const hashNewPassword = await bcrypt.hash(
  //   newPassword,
  //   Number(config.bcrypt_salt_rounds)
  // );
  const result = await adminModel.updateOne(
    { email: email },
    { password: newPassword },
    { new: true }
  );
  return result;
};
//Update Admin
const updatUserIntoDB = async (email: string, payload: TAdmin) => {
  console.log("==============================================");
  console.log("User Mail in service: ", email);
  console.log("payload in service", payload);

  const result = await adminModel.updateOne({ email: email }, payload, {
    new: true,
  });
  return result;
};

export const adminServices = {
  registerAdminIntoDB,
  getAllAdmin,
  updatePasswordIntoDB,
  deleteAdmin,
  updatUserIntoDB,
  getSingleAdminFromDB,
};
