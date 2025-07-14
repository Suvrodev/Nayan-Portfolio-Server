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
exports.instructorServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const instructor_model_1 = require("./instructor.model");
const generateInstructorId_1 = require("./generateInstructorId");
///Create Instructor into db
const registerInstructorIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("------------------------------------------");
    console.log("User Payload: ", payload);
    const email = payload === null || payload === void 0 ? void 0 : payload.email;
    const res = yield instructor_model_1.instructorModel.findOne({ email: email });
    console.log("Email Exists: ", res);
    if (res) {
        throw new AppError_1.default(409, "This Email Already Exists");
    }
    const instructorId = yield (0, generateInstructorId_1.generateInstructorId)(); // Make sure to await the function
    console.log("Generated id: ", instructorId);
    if (!instructorId) {
        throw new AppError_1.default(400, "Bad request for user id");
    }
    payload.instructorId = instructorId; // Now this is assigning a string value to instructorId
    console.log("Payload: ", payload);
    const result = yield instructor_model_1.instructorModel.create(payload);
    return result;
});
//Get All Instructor from DB
const getAllInstructorFromDB = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {};
    if (search) {
        filter.$or = [
            { name: { $regex: search, $options: "i" } },
            { phone: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
            { studentId: { $regex: search, $options: "i" } },
        ];
    }
    const result = yield instructor_model_1.instructorModel.find(filter);
    return result;
});
//Get single User from DB
const getSingleInstructorFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield instructor_model_1.instructorModel.findOne({ instructorId: id });
    return result;
});
//delete Instructor from DB
const deleteInstructor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Delete id: ", id);
    try {
        const result = yield instructor_model_1.instructorModel.deleteOne({ instructorId: id });
        return result;
    }
    catch (error) {
        throw new Error("Instructir Not Found");
    }
});
//Update Password
const updatePasswordIntoDB = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { oldPassword, newPassword } = payload;
    console.log("Change Password----------------------------------");
    console.log("User Id: ", userId);
    console.log("Old Password ", oldPassword);
    console.log("New  Password ", newPassword);
    //Checking  if the user is exist
    const isInstructorExists = yield instructor_model_1.instructorModel.findOne({
        instructorId: userId,
    });
    if (!isInstructorExists) {
        throw new AppError_1.default(404, "Instructor not Found");
    }
    //Check Password is right or wrong
    // const isPasswordMatched = await bcrypt.compare(
    //   oldPassword,
    //   isUserExists?.password
    // );
    if (oldPassword !== (isInstructorExists === null || isInstructorExists === void 0 ? void 0 : isInstructorExists.password)) {
        throw new AppError_1.default(401, "Old password is not matched");
    }
    // const hashNewPassword = await bcrypt.hash(
    //   newPassword,
    //   Number(config.bcrypt_salt_rounds)
    // );
    const result = yield instructor_model_1.instructorModel.updateOne({ instructorId: userId }, { password: newPassword }, { new: true });
    return result;
});
//Update Instructor
const updatInstructorIntoDB = (instructorId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Instructor Id in service: ", instructorId);
    console.log("payload in service", payload);
    const result = yield instructor_model_1.instructorModel.updateOne({ instructorId: instructorId }, payload, {
        new: true,
    });
    return result;
});
exports.instructorServices = {
    registerInstructorIntoDB,
    getAllInstructorFromDB,
    getSingleInstructorFromDB,
    deleteInstructor,
    updatePasswordIntoDB,
    updatInstructorIntoDB,
};
