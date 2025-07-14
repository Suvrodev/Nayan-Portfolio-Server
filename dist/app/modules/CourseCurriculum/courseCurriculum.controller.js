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
exports.CurriculumController = void 0;
const courseCurriculum_service_1 = require("./courseCurriculum.service");
//Insert Curriculam
const insertCurriculum = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const curriculum = req.body;
        console.log("Come Curriculum: ", curriculum);
        const result = yield courseCurriculum_service_1.CurriculamServices.createCurriculum(curriculum);
        //Send Response
        res.status(201).json({
            message: "Curriculam data inserted successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Curriculum
const getAllCurriculumAccordingToCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseRef } = req === null || req === void 0 ? void 0 : req.params;
        // console.log("courseRef-----------------: ", courseRef);
        const result = yield courseCurriculum_service_1.CurriculamServices.getAllCurriculumFromDB(courseRef);
        res.status(200).json({
            message: "Curriculum Retrive successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Curriculum
const deleteCurriculum = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const curriculumId = req.params.curriculumId;
        console.log("Software id-----------------: ", curriculumId);
        const result = yield courseCurriculum_service_1.CurriculamServices.deleteCurriculumFromDB(curriculumId);
        //Send Response
        res.status(200).json({
            message: "Curriculum deleted successfully",
            status: true,
            data: {},
        });
    }
    catch (error) {
        next(error);
    }
});
//Update curriculum
const updateCurriculum = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const curriculumId = req.params.curriculumId;
        const updateCurriculumData = req.body;
        const result = yield courseCurriculum_service_1.CurriculamServices.updateCurriculumFromDB(curriculumId, updateCurriculumData);
        //Send Response
        res.status(200).json({
            message: "Curriculum updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.CurriculumController = {
    insertCurriculum,
    getAllCurriculumAccordingToCourse,
    deleteCurriculum,
    updateCurriculum,
};
