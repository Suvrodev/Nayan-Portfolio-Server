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
exports.CourseServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const course_model_1 = require("./course.model");
//Insert Course
const createCourseIntoDB = (courseData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Course Data: ", courseData);
    const isExistId = yield course_model_1.CourseModel.findOne({
        courseId: courseData === null || courseData === void 0 ? void 0 : courseData.courseId,
    });
    if (isExistId) {
        throw new AppError_1.default(400, "This Course id already exists");
    }
    const result = yield course_model_1.CourseModel.create(courseData);
    return result;
});
// Get all Course
const getAllCourseFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.CourseModel.find()
        .select("courseId courseOrder refServiceId courseTitle courseImage courseClassNumber courseProjectNumber courseDuration courseDiscount courseExists")
        .sort({ courseOrder: 1 });
    return result;
});
// Get all Course By Admin
const getAllCourseByAdminFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.CourseModel.find()
        .select("courseId courseOrder courseTitle courseImage courseClassNumber courseProjectNumber courseExists")
        .sort({ courseOrder: 1 });
    return result;
});
// Get specific Course
const getSpecificCourseFromDB = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.CourseModel.findOne({ courseId: courseId });
    return result;
});
/**
 * Home page
 */
// Get specific Servcie Course
const getSpecificServiceCourseFromDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (serviceId == "0") {
        result = yield course_model_1.CourseModel.find({ courseExists: "yes" }).select("courseTitle courseImage courseId courseClassNumber courseProjectNumber courseDuration courseDiscount");
    }
    else {
        result = yield course_model_1.CourseModel.find({
            refServiceId: serviceId,
            courseExists: "yes",
        }).select("courseTitle courseImage courseId courseClassNumber courseProjectNumber courseDuration courseDiscount");
    }
    return result;
});
//delete Course
const deleteCourseFromDB = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    //main work
    console.log("course id******", courseId);
    const result = yield course_model_1.CourseModel.deleteOne({ courseId: courseId });
    return result;
});
//update Course
const updateCourseFromDB = (courseId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Course id::::::", courseId);
    console.log("Update Course Body: ", payload);
    const result = yield course_model_1.CourseModel.findOneAndUpdate({ courseId: courseId }, payload, {
        new: true,
    });
    return result;
});
exports.CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
    getAllCourseByAdminFromDB,
    getSpecificCourseFromDB,
    getSpecificServiceCourseFromDB,
    deleteCourseFromDB,
    updateCourseFromDB,
};
