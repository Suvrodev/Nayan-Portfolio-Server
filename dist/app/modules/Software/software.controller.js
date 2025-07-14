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
exports.SoftwareController = void 0;
const software_service_1 = require("./software.service");
//Insert Software
const insertSoftware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const software = req.body;
        console.log("Come Software: ", software);
        const result = yield software_service_1.SoftwareService.InsertSoftwareIntoDB(software);
        //Send Response
        res.status(201).json({
            message: "Software data inserted successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Software
const getAllSoftwareAccordingToCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseRef } = req === null || req === void 0 ? void 0 : req.params;
        // console.log("courseRef-----------------: ", courseRef);
        const result = yield software_service_1.SoftwareService.getAllSoftwareFromDB(courseRef);
        res.status(200).json({
            message: "Software Retrive successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Software
const deleteSoftware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const softwareId = req.params.softwareId;
        console.log("Software id-----------------: ", softwareId);
        const result = yield software_service_1.SoftwareService.deleteSoftwareFromDB(softwareId);
        //Send Response
        res.status(200).json({
            message: "Software deleted successfully",
            status: true,
            data: {},
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Software
const updateSoftware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const softwareId = req.params.softwareId;
        const updateSoftwareData = req.body;
        const result = yield software_service_1.SoftwareService.updateSoftwareFromDB(softwareId, updateSoftwareData);
        //Send Response
        res.status(200).json({
            message: "Software updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.SoftwareController = {
    insertSoftware,
    getAllSoftwareAccordingToCourse,
    deleteSoftware,
    updateSoftware,
};
