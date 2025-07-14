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
exports.AuthInstructorServices = void 0;
const config_1 = __importDefault(require("../../config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const instructor_model_1 = require("../UInstructor/instructor.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginInstructor = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log("Payloadddd: ", payload);
    //Checking  if the Instructor is exist
    const isInstructorExists = yield instructor_model_1.instructorModel.findOne({
        email: payload.email,
    });
    if (!isInstructorExists) {
        throw new AppError_1.default(404, "Instructor not Found");
    }
    //Check Instructor blocked or not
    const instructorIsBlocked = isInstructorExists === null || isInstructorExists === void 0 ? void 0 : isInstructorExists.isBlocked;
    if (instructorIsBlocked) {
        throw new AppError_1.default(403, "Instructor is Blocked");
    }
    //Check Instructor status enable or disable
    const instructorStatus = isInstructorExists === null || isInstructorExists === void 0 ? void 0 : isInstructorExists.status;
    if (instructorStatus == "disable") {
        throw new AppError_1.default(403, "Instructor is disable");
    }
    //Check Password is right or wrong
    // const isPasswordMatched = await bcrypt.compare(
    //   payload?.password,
    //   isUserExists?.password
    // );
    // if (!isPasswordMatched) {
    //   throw new AppError(401, "Password is Incorrect");
    // }
    ///Check Password without bycript (For Don't set forget Password)
    if ((payload === null || payload === void 0 ? void 0 : payload.password) !== (isInstructorExists === null || isInstructorExists === void 0 ? void 0 : isInstructorExists.password)) {
        throw new AppError_1.default(401, "Password is Incorrect");
    }
    // console.log("is User exists----: ", isUserExists);
    //Create Token and send to the client
    const jwtPayload = {
        _id: isInstructorExists._id,
        name: isInstructorExists === null || isInstructorExists === void 0 ? void 0 : isInstructorExists.name,
        email: isInstructorExists === null || isInstructorExists === void 0 ? void 0 : isInstructorExists.email,
        role: isInstructorExists === null || isInstructorExists === void 0 ? void 0 : isInstructorExists.role,
        isBlocked: isInstructorExists === null || isInstructorExists === void 0 ? void 0 : isInstructorExists.isBlocked,
        studentId: isInstructorExists === null || isInstructorExists === void 0 ? void 0 : isInstructorExists.instructorId,
        phone: isInstructorExists === null || isInstructorExists === void 0 ? void 0 : isInstructorExists.phone,
        image: isInstructorExists === null || isInstructorExists === void 0 ? void 0 : isInstructorExists.image,
        status: isInstructorExists === null || isInstructorExists === void 0 ? void 0 : isInstructorExists.status,
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_access_token, {
        expiresIn: "30d",
    });
    //   console.log("JwtPayload: ", jwtPayload);
    //Access Granted: Send AccessToken, Refresh Token
    return {
        accessToken,
    };
});
exports.AuthInstructorServices = {
    loginInstructor,
};
