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
exports.ScheduleService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const course_model_1 = require("../Course/course.model");
const schedule_model_1 = require("./schedule.model");
//Insert Schedule
const InsertScheduleIntoDB = (scheduleData) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseRef } = scheduleData;
    console.log("Course ref: ", courseRef);
    const isCourseExists = yield course_model_1.CourseModel.findOne({ _id: courseRef });
    console.log("is Course exists: ", isCourseExists);
    if (!isCourseExists) {
        throw new AppError_1.default(404, "Reference Course is not Exists");
    }
    const result = yield schedule_model_1.ScheduleModel.create(scheduleData);
    return result;
});
///Get Needed Schedule according to course
const getAllScheduleFromDB = (courseRefId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield schedule_model_1.ScheduleModel.find({ courseRef: courseRefId });
    return res;
});
//delete Schedule
const deleteScheduleFromDB = (scheduleId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schedule_model_1.ScheduleModel.findByIdAndDelete({ _id: scheduleId });
    return result;
});
//Update Schedule
const updateScheduleFromDB = (scheduleId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schedule_model_1.ScheduleModel.findByIdAndUpdate({ _id: scheduleId }, payload, {
        new: true,
    });
    return result;
});
exports.ScheduleService = {
    InsertScheduleIntoDB,
    getAllScheduleFromDB,
    deleteScheduleFromDB,
    updateScheduleFromDB,
};
