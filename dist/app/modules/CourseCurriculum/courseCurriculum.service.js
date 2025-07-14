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
exports.CurriculamServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const course_model_1 = require("../Course/course.model");
const courseCurriculum_model_1 = require("./courseCurriculum.model");
// Create Curriculum
const createCurriculum = (curriculumData) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = curriculumData;
    console.log("Course ref--: ", courseId);
    console.log("Curriculum data: ", curriculumData);
    const isCourseExists = yield course_model_1.CourseModel.findOne({
        courseId: courseId,
    });
    // console.log("is Course exists:-- ", isCourseExists);
    if (!isCourseExists) {
        throw new AppError_1.default(404, "Reference Course is not Exists");
    }
    const result = yield courseCurriculum_model_1.CurriculumModel.create(curriculumData);
    return result;
});
///Get Needed Curriculum according to course
const getAllCurriculumFromDB = (courseRefId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield courseCurriculum_model_1.CurriculumModel.find({ courseId: courseRefId }).sort({
        order: 1,
    });
    return res;
});
//delete curriculum
const deleteCurriculumFromDB = (curriculumId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield courseCurriculum_model_1.CurriculumModel.findByIdAndDelete({ _id: curriculumId });
    return result;
});
//Update curriculum
const updateCurriculumFromDB = (curriculumId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log("User Id in service: ", userId);
    //   console.log("payload in service", payload);
    const result = yield courseCurriculum_model_1.CurriculumModel.findByIdAndUpdate({ _id: curriculumId }, payload, {
        new: true,
    });
    return result;
});
exports.CurriculamServices = {
    createCurriculum,
    getAllCurriculumFromDB,
    deleteCurriculumFromDB,
    updateCurriculumFromDB,
};
