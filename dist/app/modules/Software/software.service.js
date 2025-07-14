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
exports.SoftwareService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const course_model_1 = require("../Course/course.model");
const software_model_1 = require("./software.model");
//Insert Software
const InsertSoftwareIntoDB = (softwareData) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseRef } = softwareData;
    console.log("Course ref: ", courseRef);
    const isCourseExists = yield course_model_1.CourseModel.findOne({ _id: courseRef });
    console.log("is Course exists: ", isCourseExists);
    if (!isCourseExists) {
        throw new AppError_1.default(404, "Reference Course is not Exists");
    }
    const result = yield software_model_1.SoftwareModel.create(softwareData);
    return result;
});
///Get Needed Software according to course
const getAllSoftwareFromDB = (courseRefId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield software_model_1.SoftwareModel.find({ courseRef: courseRefId });
    return res;
});
//delete Software
const deleteSoftwareFromDB = (softwareId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield software_model_1.SoftwareModel.findByIdAndDelete({ _id: softwareId });
    return result;
});
//Update Software
const updateSoftwareFromDB = (productId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield software_model_1.SoftwareModel.findByIdAndUpdate({ _id: productId }, payload, {
        new: true,
    });
    return result;
});
exports.SoftwareService = {
    InsertSoftwareIntoDB,
    getAllSoftwareFromDB,
    deleteSoftwareFromDB,
    updateSoftwareFromDB,
};
