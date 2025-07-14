"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgetPasswordRoute = void 0;
const express_1 = __importDefault(require("express"));
const forgetPassword_controller_1 = require("./forgetPassword.controller");
const router = express_1.default.Router();
router.post("/", forgetPassword_controller_1.ForgetPasswordController.sendOTP);
router.post("/update-password-after-otp", forgetPassword_controller_1.ForgetPasswordController.updatePasswordAfterOTP);
exports.ForgetPasswordRoute = router;
