"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgetPasswordInstructorRoute = void 0;
const express_1 = __importDefault(require("express"));
const forgetPasswordInstructor_controller_1 = require("./forgetPasswordInstructor.controller");
const router = express_1.default.Router();
router.post("/", forgetPasswordInstructor_controller_1.ForgetPasswordController.sendOTP);
router.post("/update-password-after-otp", forgetPasswordInstructor_controller_1.ForgetPasswordController.updatePasswordAfterOTP);
exports.ForgetPasswordInstructorRoute = router;
