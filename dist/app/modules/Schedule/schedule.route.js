"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const schedule_controller_1 = require("./schedule.controller");
const router = express_1.default.Router();
//will call controller function
router.post("/", schedule_controller_1.ScheduleController.insertSchedule);
router.get("/:courseRef", schedule_controller_1.ScheduleController.getAllScheduleAccordingToCourse);
router.delete("/:scheduleId", schedule_controller_1.ScheduleController.deleteSchedule);
router.patch("/:scheduleId", schedule_controller_1.ScheduleController.updateSchedule);
exports.ScheduleRoutes = router;
