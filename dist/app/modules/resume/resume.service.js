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
exports.resumeServices = void 0;
const resume_model_1 = require("./resume.model");
///Create Resume into db
const addResumeIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Resume Payload: ", payload);
    const result = yield resume_model_1.ResumeModel.create(payload);
    console.log("Resume Result: ", result);
    return result;
});
//Get All Resume from DB
const getAllResumeFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield resume_model_1.ResumeModel.find();
    return result;
});
//Get Specific Resume from DB
const getSpecificResumeFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("---------------------------");
    console.log("Resume id: ", _id);
    const result = yield resume_model_1.ResumeModel.findById({ _id });
    console.log("Result: ", result);
    return result;
});
//Delete Resume from DB
const deleteResumeFromDB = (resumeId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield resume_model_1.ResumeModel.deleteOne({ _id: resumeId });
    return result;
});
//Update Resume
const updateResumeIntoDB = (portfolioId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Resume id: ", portfolioId);
    console.log("payload in Resume", payload);
    const result = yield resume_model_1.ResumeModel.findByIdAndUpdate(portfolioId, payload, {
        new: true,
    });
    return result;
});
exports.resumeServices = {
    addResumeIntoDB,
    getAllResumeFromDB,
    getSpecificResumeFromDB,
    deleteResumeFromDB,
    updateResumeIntoDB,
};
