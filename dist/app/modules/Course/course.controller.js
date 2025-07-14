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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const course_service_1 = require("./course.service");
///Add Course
const addCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseData = req.body;
        console.log("Course data come: ", courseData);
        const result = yield course_service_1.CourseServices.createCourseIntoDB(courseData);
        res.status(201).json({
            success: true,
            message: "Course Added successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Course
const getAllCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield course_service_1.CourseServices.getAllCourseFromDB();
        res.status(201).json({
            success: true,
            message: "Course Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Course by Admin
const getAllCourseByAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield course_service_1.CourseServices.getAllCourseByAdminFromDB();
        res.status(201).json({
            success: true,
            message: "Course Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific Course
const getSpecificCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const courseId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.courseId;
        console.log("Course id: ", courseId);
        const result = yield course_service_1.CourseServices.getSpecificCourseFromDB(courseId);
        // console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Course Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific Service Course
const getSpecificServiceCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const serviceId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.serviceId;
        console.log("serviceId: ", serviceId);
        const result = yield course_service_1.CourseServices.getSpecificServiceCourseFromDB(serviceId);
        // console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Course Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Service
const deleteCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const courseId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.courseId;
        console.log("course id:=========== ", courseId);
        const result = yield course_service_1.CourseServices.deleteCourseFromDB(courseId);
        console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Course Deleted successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Course
const updateCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseId = req.params.courseId;
        const course = req.body;
        const result = yield course_service_1.CourseServices.updateCourseFromDB(courseId, course);
        //Send Response
        res.status(200).json({
            message: "Course updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.CourseController = {
    addCourse,
    getAllCourse,
    getAllCourseByAdmin,
    getSpecificCourse,
    getSpecificServiceCourse,
    deleteCourse,
    updateCourse,
};
