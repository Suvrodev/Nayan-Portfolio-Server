"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurriculumRoutes = void 0;
const express_1 = __importDefault(require("express"));
const courseCurriculum_controller_1 = require("./courseCurriculum.controller");
const router = express_1.default.Router();
//will call controller function
router.post("/", courseCurriculum_controller_1.CurriculumController.insertCurriculum);
router.get("/:courseRef", courseCurriculum_controller_1.CurriculumController.getAllCurriculumAccordingToCourse);
router.delete("/:curriculumId", courseCurriculum_controller_1.CurriculumController.deleteCurriculum);
router.patch("/:curriculumId", courseCurriculum_controller_1.CurriculumController.updateCurriculum);
exports.CurriculumRoutes = router;
