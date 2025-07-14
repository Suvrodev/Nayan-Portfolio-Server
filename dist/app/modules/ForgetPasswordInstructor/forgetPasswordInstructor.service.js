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
exports.ForgetPasswordInstructorService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const instructor_model_1 = require("../UInstructor/instructor.model");
const senfForgetPasswordInstructorEmail_1 = require("./senfForgetPasswordInstructorEmail");
///Send OTP
const SendOTP = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("------------------------------------------");
    console.log("Payload: ", payload);
    const isUserExists = yield instructor_model_1.instructorModel.findOne({ email: payload });
    if (!isUserExists) {
        throw new AppError_1.default(404, "This email is not exists");
    }
    const resetCode = Math.floor(100000 + Math.random() * 900000);
    const UpdatepasswordResetCode = yield instructor_model_1.instructorModel.updateOne({ email: payload }, { passwordResetCode: resetCode }, {
        new: true,
    });
    console.log("UpdatepasswordResetCode: ", UpdatepasswordResetCode);
    if (!UpdatepasswordResetCode) {
        return;
    }
    //Call this function for Email
    yield (0, senfForgetPasswordInstructorEmail_1.sendForgetPasswordEmail)(payload.toString(), resetCode.toString());
    return resetCode;
});
//Update Password of user
const updatPasswordAfterOTPIntoDB = (email, otp, password) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("================================");
    console.log("email: ", email);
    console.log("OTP:", otp);
    console.log("Password:", password);
    //Checking  if the user is exist
    const isUserExists = yield instructor_model_1.instructorModel.findOne({ email: email });
    if (!isUserExists) {
        throw new AppError_1.default(404, "User not Found");
    }
    console.log("Exist user: ", isUserExists);
    if (otp != (isUserExists === null || isUserExists === void 0 ? void 0 : isUserExists.passwordResetCode)) {
        throw new AppError_1.default(400, "Invalid OTP");
    }
    const result = yield instructor_model_1.instructorModel.updateOne({ email: email }, { password: password }, {
        new: true,
    });
    return result;
});
exports.ForgetPasswordInstructorService = {
    SendOTP,
    updatPasswordAfterOTPIntoDB,
};
