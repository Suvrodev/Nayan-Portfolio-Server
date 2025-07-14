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
exports.instructorControllers = void 0;
const instructor_service_1 = require("./instructor.service");
///Register Instructor
const registerInstructor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instructorData = req.body;
        const result = yield instructor_service_1.instructorServices.registerInstructorIntoDB(instructorData);
        if (!result) {
            res.status(400).json({
                success: true,
                message: "Unscuccessfull Register",
                statusCode: 400,
                data: result,
            });
        }
        res.status(201).json({
            success: true,
            message: "Instrcutor registered successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Instructor
const getAllInstructor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search } = req.query;
        console.log("search: ", search);
        const result = yield instructor_service_1.instructorServices.getAllInstructorFromDB(search);
        res.status(201).json({
            success: true,
            message: "Instructor Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific Instructor
const getSpecificInstructor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        const result = yield instructor_service_1.instructorServices.getSingleInstructorFromDB(id);
        res.status(201).json({
            success: true,
            message: "Instructor Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//delete  instructor
const deleteInstructor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        const result = yield instructor_service_1.instructorServices.deleteInstructor(id);
        res.status(201).json({
            success: true,
            message: "Instructor Deleted successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update  Instructor
const updateInstructor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        const body = req === null || req === void 0 ? void 0 : req.body;
        console.log("Come id: ", id);
        console.log("Body ", body);
        const result = yield instructor_service_1.instructorServices.updatInstructorIntoDB(id, body);
        res.status(201).json({
            success: true,
            message: "Instructor Updated successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
///Update Password
const updatePassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const instructorId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.instructorId;
        const userPassword = req.body;
        console.log("Logged user id : ", (_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b._id);
        console.log("come user id: ", instructorId);
        // if (req?.user?._id !== userId) {
        //   throw new AppError(403, "You are not authorized");
        // }
        const result = yield instructor_service_1.instructorServices.updatePasswordIntoDB(instructorId, userPassword);
        res.status(201).json({
            success: true,
            message: "Password Updated Successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.instructorControllers = {
    registerInstructor,
    getAllInstructor,
    getSpecificInstructor,
    deleteInstructor,
    updateInstructor,
    updatePassword,
};
