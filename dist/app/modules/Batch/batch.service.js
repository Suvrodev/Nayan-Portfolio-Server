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
exports.BatchService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const batch_model_1 = require("./batch.model");
//Insert Batch
const insertBatchIntoDB = (batchData) => __awaiter(void 0, void 0, void 0, function* () {
    //Batch id Exist or not
    const isBatchIdExists = yield batch_model_1.BatchModel.findOne({
        batchId: batchData === null || batchData === void 0 ? void 0 : batchData.batchId,
    });
    if (isBatchIdExists) {
        throw new AppError_1.default(400, "Batch id already exists");
    }
    //Same course batch upcoming exist or not
    const isSameCourseIdUpcomingExist = yield batch_model_1.BatchModel.findOne({
        underCourse: batchData === null || batchData === void 0 ? void 0 : batchData.underCourse,
        batchStatus: "upComing",
    });
    if (isSameCourseIdUpcomingExist) {
        throw new AppError_1.default(400, `UpComing Batch already exist in course ${batchData === null || batchData === void 0 ? void 0 : batchData.underCourse} `);
    }
    const result = yield batch_model_1.BatchModel.create(batchData);
    return result;
});
///Get batch (Admin jodi Student k assign korte chay tahole eta lage)  (UnUsed)
const getAllBatchFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield batch_model_1.BatchModel.find();
    return res;
});
///Get specific batch  (Not used)
const getSpecificBatchFromDB = (batchId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield batch_model_1.BatchModel.findOne({
        batchId: batchId,
        batchStatus: "upComing",
    });
    return res;
});
///Get just 1 batch based on batch id (Not matter status for update)
const getJustOneBatchFromDB = (batchId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("(Just) batch id", batchId);
    const res = yield batch_model_1.BatchModel.findOne({
        batchId: batchId,
    });
    return res;
});
///Get Specific 1 batch under course upComing
const getUpComingBatchUnderCourseFromDB = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Check Course id: ", courseId);
    const res = yield batch_model_1.BatchModel.findOne({
        underCourse: courseId,
        batchStatus: "upComing",
    });
    return res;
});
///Get Specific all batch under course (course Drop down e batch khoja)
const getSpecificBatchUnderCourseFromDB = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Check Course id: ", courseId);
    const res = yield batch_model_1.BatchModel.find({
        underCourse: courseId,
    });
    return res;
});
// Instructor detail e click korle dekhte parbe se kon kon batch e assign
const getBatchForInstructorAssignation = (instructorId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Instructor id: ", instructorId);
    const res = yield batch_model_1.BatchModel.find({
        instructorId: instructorId,
    });
    return res;
});
//delete btch
const deleteBatchFromDB = (batchId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield batch_model_1.BatchModel.deleteOne({ batchId: batchId });
    return result;
});
//Update batch
const updateBatchFromDB = (batchId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Update Batch");
    console.log("Batch id: ", batchId);
    console.log("Payload: ", payload);
    const result = yield batch_model_1.BatchModel.updateOne({ batchId: batchId }, payload, {
        new: true,
    });
    return result;
});
//Update batch Notice
const updateBatchNoticeFromDB = (batchId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Update Batch Notice Service--------------");
    console.log("Batch id: ", batchId);
    console.log("Payload: ", payload);
    const result = yield batch_model_1.BatchModel.updateOne({ batchId: batchId }, { batchNotice: payload }, {
        new: true,
    });
    console.log("Result: ", result);
    return result;
});
exports.BatchService = {
    insertBatchIntoDB,
    getAllBatchFromDB,
    getSpecificBatchFromDB,
    getJustOneBatchFromDB,
    getUpComingBatchUnderCourseFromDB,
    getSpecificBatchUnderCourseFromDB,
    getBatchForInstructorAssignation,
    deleteBatchFromDB,
    updateBatchFromDB,
    updateBatchNoticeFromDB,
};
