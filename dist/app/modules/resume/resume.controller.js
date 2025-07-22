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
exports.ResumeController = void 0;
const resume_service_1 = require("./resume.service");
///Add Resume
const addResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceData = req.body;
        const result = yield resume_service_1.resumeServices.addResumeIntoDB(serviceData);
        res.status(201).json({
            success: true,
            message: "Resume Added successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Resume
const getAllResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield resume_service_1.resumeServices.getAllResumeFromDB();
        res.status(201).json({
            success: true,
            message: "Resume Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific Resume
const getSpecificResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const resumeId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.resumeId;
        console.log("Resume id: ", resumeId);
        const result = yield resume_service_1.resumeServices.getSpecificResumeFromDB(resumeId);
        console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Service Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Resume
const deleteResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const resumeId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.resumeId;
        console.log("Resume id: ", resumeId);
        const result = yield resume_service_1.resumeServices.deleteResumeFromDB(resumeId);
        console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Resume Deleted successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Resume
const updateResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resumeId = req.params.resumeId;
        const resume = req.body;
        console.log("Resume body: ", resume);
        const result = yield resume_service_1.resumeServices.updateResumeIntoDB(resumeId, resume);
        //Send Response
        res.status(200).json({
            message: "Resume updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.ResumeController = {
    addResume,
    getAllResume,
    getSpecificResume,
    deleteResume,
    updateResume,
};
