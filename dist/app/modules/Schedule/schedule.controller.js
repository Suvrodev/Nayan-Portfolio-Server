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
exports.ScheduleController = void 0;
const schedule_service_1 = require("./schedule.service");
//Insert Schedule
const insertSchedule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const schedule = req.body;
        console.log("Come schedule: ", schedule);
        const result = yield schedule_service_1.ScheduleService.InsertScheduleIntoDB(schedule);
        //Send Response
        res.status(201).json({
            message: "schedule data inserted successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Shcedule
const getAllScheduleAccordingToCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseRef } = req === null || req === void 0 ? void 0 : req.params;
        // console.log("courseRef-----------------: ", courseRef);
        const result = yield schedule_service_1.ScheduleService.getAllScheduleFromDB(courseRef);
        res.status(200).json({
            message: "Schedule Retrive successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Schedule
const deleteSchedule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scheduleId = req.params.scheduleId;
        console.log("schedule id-----------------: ", scheduleId);
        const result = yield schedule_service_1.ScheduleService.deleteScheduleFromDB(scheduleId);
        //Send Response
        res.status(200).json({
            message: "Schedule deleted successfully",
            status: true,
            data: {},
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Schedule
const updateSchedule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scheduleId = req.params.scheduleId;
        const updateScheduleData = req.body;
        console.log("Schedule id: ", scheduleId);
        console.log("update schedule data: ", updateScheduleData);
        const result = yield schedule_service_1.ScheduleService.updateScheduleFromDB(scheduleId, updateScheduleData);
        //Send Response
        res.status(200).json({
            message: "Schedules updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.ScheduleController = {
    insertSchedule,
    getAllScheduleAccordingToCourse,
    deleteSchedule,
    updateSchedule,
};
