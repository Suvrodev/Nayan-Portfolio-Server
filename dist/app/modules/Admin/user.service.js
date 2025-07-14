"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const admin_model_1 = require("./admin.model");
const generateUserId_1 = require("./generateUserId");
///Create User into db
const registerUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("User Payload: ", payload);
    const email = payload === null || payload === void 0 ? void 0 : payload.email;
    const res = yield admin_model_1.userModel.findOne({ email: email });
    console.log(" Email Exists: ", res);
    if (res) {
        throw new AppError_1.default(409, "This Email Allready Exists");
    }
    const studentId = yield (0, generateUserId_1.generateUserId)();
    console.log("Generated id : ", studentId);
    if (!studentId) {
        throw new AppError_1.default(400, "Bad request for user id");
    }
    payload.studentId = studentId;
    const result = yield admin_model_1.userModel.create(payload);
    return result;
});
//Get All User from DB
const getAllUser = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {};
    if (search) {
        filter.$or = [
            { name: { $regex: search, $options: "i" } },
            { phone: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
            { studentId: { $regex: search, $options: "i" } },
        ];
    }
    const result = yield admin_model_1.userModel.find(filter);
    return result;
});
//Get single User from DB
const getSingleUserFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("Email in service: ", email);
    const result = yield admin_model_1.userModel.findOne({ email: email });
    return result;
});
//deletel User from DB
const deleteUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Delete email: ", email);
    try {
        const result = yield admin_model_1.userModel.deleteOne({ email: email });
        return result;
    }
    catch (error) {
        throw new Error("USer Not Found");
    }
});
//Update Password
const updatePasswordIntoDB = (email, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { oldPassword, newPassword } = payload;
    console.log("------------------");
    console.log("User email: ", email);
    console.log("Old Password ", oldPassword);
    console.log("New  Password ", newPassword);
    //Checking  if the user is exist
    const isUserExists = yield admin_model_1.userModel.findOne({ email: email });
    if (!isUserExists) {
        throw new AppError_1.default(404, "User not Found");
    }
    //Check Password is right or wrong
    // const isPasswordMatched = await bcrypt.compare(
    //   oldPassword,
    //   isUserExists?.password
    // );
    if (oldPassword !== (isUserExists === null || isUserExists === void 0 ? void 0 : isUserExists.password)) {
        throw new AppError_1.default(401, "Old password is not matched");
    }
    // const hashNewPassword = await bcrypt.hash(
    //   newPassword,
    //   Number(config.bcrypt_salt_rounds)
    // );
    const result = yield admin_model_1.userModel.updateOne({ email: email }, { password: newPassword }, { new: true });
    return result;
});
//Update User
const updatUserIntoDB = (email, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("==============================================");
    console.log("User Mail in service: ", email);
    console.log("payload in service", payload);
    const result = yield admin_model_1.userModel.updateOne({ email: email }, payload, {
        new: true,
    });
    return result;
});
exports.userServices = {
    registerUserIntoDB,
    getAllUser,
    updatePasswordIntoDB,
    deleteUser,
    updatUserIntoDB,
    getSingleUserFromDB,
};
