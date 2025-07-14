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
exports.ForgetPasswordController = void 0;
const forgetPasswordInstructor_service_1 = require("./forgetPasswordInstructor.service");
///Add Send otp
const sendOTP = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const result = yield forgetPasswordInstructor_service_1.ForgetPasswordInstructorService.SendOTP(email);
        res.status(201).json({
            success: true,
            message: "Reseting Password",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Password
const updatePasswordAfterOTP = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp, password } = req.body;
        const result = yield forgetPasswordInstructor_service_1.ForgetPasswordInstructorService.updatPasswordAfterOTPIntoDB(email, otp, password);
        res.status(201).json({
            success: true,
            message: "Reseting Password",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.ForgetPasswordController = {
    sendOTP,
    updatePasswordAfterOTP,
};
