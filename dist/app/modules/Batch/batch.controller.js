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
exports.BatchController = void 0;
const batch_service_1 = require("./batch.service");
//Insert Batch
const insertBatch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const batch = req.body;
        console.log("Come Batch: ", batch);
        const result = yield batch_service_1.BatchService.insertBatchIntoDB(batch);
        //Send Response
        res.status(201).json({
            message: "batch inserted successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All batch (Admin jodi Student k assign korte chay tahole eta lage)  (UnUsed)
const getAllBatch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield batch_service_1.BatchService.getAllBatchFromDB();
        res.status(200).json({
            message: "Batch Retrive successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get specific batch
const getSpecificBatch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const batchId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.batchId;
        const result = yield batch_service_1.BatchService.getSpecificBatchFromDB(batchId);
        res.status(200).json({
            message: "Batch Retrive successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Just one batch (Not matter status for update)
const getJustOneBatch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const batchId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.batchId;
        const result = yield batch_service_1.BatchService.getJustOneBatchFromDB(batchId);
        res.status(200).json({
            message: "Batch Retrive successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//get Upcoming batch under Course
const getUpComingBatchUnderCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseId = req.params.courseId;
        console.log("Course id-----------------: ", courseId);
        const result = yield batch_service_1.BatchService.getUpComingBatchUnderCourseFromDB(courseId);
        res.status(200).json({
            message: "Batch Retrive successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//getBatch Under Course Batch
const getSpecificBatchUnderCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseId = req.params.courseId;
        console.log("Course id-----------------: ", courseId);
        const result = yield batch_service_1.BatchService.getSpecificBatchUnderCourseFromDB(courseId);
        res.status(200).json({
            message: "Batch Retrive successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//getBatch Under Instructor
const getBatchForInstructorAssignation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instructorId = req.params.instructorid;
        console.log("instructorId-----------------: ", instructorId);
        const result = yield batch_service_1.BatchService.getBatchForInstructorAssignation(Number(instructorId));
        res.status(200).json({
            message: "Batch Retrive successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Batch
const deleteBatch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const batchId = req.params.batchId;
        console.log("Batch id-----------------: ", batchId);
        const result = yield batch_service_1.BatchService.deleteBatchFromDB(batchId);
        //Send Response
        res.status(200).json({
            message: "Batch deleted successfully",
            status: true,
            data: {},
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Batch
const updateBatch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const batchId = req.params.batchId;
        const updateBatchData = req.body;
        const result = yield batch_service_1.BatchService.updateBatchFromDB(batchId, updateBatchData);
        //Send Response
        res.status(200).json({
            message: "Batch updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Batch Notice
const updateBatchNotice = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Batch Notice Controller-----------");
        const batchId = req.params.batchId;
        const { batchNotice } = req.body;
        console.log("Notice: ", batchNotice);
        const result = yield batch_service_1.BatchService.updateBatchNoticeFromDB(batchId, batchNotice);
        //Send Response
        res.status(200).json({
            message: "Batch Notice updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.BatchController = {
    insertBatch,
    getAllBatch,
    getSpecificBatch,
    getJustOneBatch,
    getUpComingBatchUnderCourse,
    getSpecificBatchUnderCourse,
    getBatchForInstructorAssignation,
    deleteBatch,
    updateBatch,
    updateBatchNotice,
};
