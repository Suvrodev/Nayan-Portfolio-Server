"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resumeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const resume_controller_1 = require("./resume.controller");
const router = express_1.default.Router();
router.post("/", resume_controller_1.ResumeController.addResume);
router.get("/", resume_controller_1.ResumeController.getAllResume);
router.get("/:resumeId", resume_controller_1.ResumeController.getSpecificResume);
router.delete("/:resumeId", resume_controller_1.ResumeController.deleteResume);
router.patch("/:resumeId", resume_controller_1.ResumeController.updateResume);
exports.resumeRoutes = router;
