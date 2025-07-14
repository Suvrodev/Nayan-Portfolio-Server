"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchRoutes = void 0;
const express_1 = __importDefault(require("express"));
const batch_controller_1 = require("./batch.controller");
const router = express_1.default.Router();
//will call controller function
router.post("/", batch_controller_1.BatchController.insertBatch);
router.get("/", batch_controller_1.BatchController.getAllBatch);
router.get("/:batchId", batch_controller_1.BatchController.getSpecificBatch);
///get one  batch in Admin Pannel for update
router.get("/just-one/:batchId", batch_controller_1.BatchController.getJustOneBatch);
//get one upcomming batch in course detail (Course Detail e)
router.get("/undercourse/upComing/:courseId", batch_controller_1.BatchController.getUpComingBatchUnderCourse);
// get all batch based on Course (Admin pannel) (course Drop down e batch khoja)
router.get("/undercourse/:courseId", batch_controller_1.BatchController.getSpecificBatchUnderCourse);
// get all batch based on instructor (Instructor kon kon batch e assign)
router.get("/underinstructor/:instructorid", batch_controller_1.BatchController.getBatchForInstructorAssignation);
router.delete("/:batchId", batch_controller_1.BatchController.deleteBatch);
router.patch("/:batchId", batch_controller_1.BatchController.updateBatch);
router.patch("/batch-notice/:batchId", batch_controller_1.BatchController.updateBatchNotice);
exports.BatchRoutes = router;
