"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignStudentRoute = void 0;
const express_1 = __importDefault(require("express"));
const assignStudent_controller_1 = require("./assignStudent.controller");
const router = express_1.default.Router();
router.post("/", assignStudent_controller_1.AssignStudentController.insertAssignStundet);
router.get("/", assignStudent_controller_1.AssignStudentController.getAllAssignStudent);
router.get("/:assignId", assignStudent_controller_1.AssignStudentController.getSpecificAssignStudent);
router.get("/own-course/:studentEmail", assignStudent_controller_1.AssignStudentController.getOwnCourseOfSAssignStudent);
router.get("/instructors-assign-student/:batchId/:courseId", assignStudent_controller_1.AssignStudentController.getAssignStudentOfInstructor);
router.delete("/:assignId", assignStudent_controller_1.AssignStudentController.deleteAssignStudent);
router.patch("/:assignId", assignStudent_controller_1.AssignStudentController.updateAssignStudent);
exports.AssignStudentRoute = router;
