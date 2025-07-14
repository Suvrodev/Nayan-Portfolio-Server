"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInstructorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const authInstructor_validation_1 = require("./authInstructor.validation");
const authInstructor_controller_1 = require("./authInstructor.controller");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(authInstructor_validation_1.AuthInstructorValidation.loginValidationSchema), authInstructor_controller_1.AuthInstructorControllers.loginInstructor);
exports.AuthInstructorRoutes = router;
