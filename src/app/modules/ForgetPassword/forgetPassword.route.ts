import express, { NextFunction, Request, Response } from "express";
import { ForgetPasswordController } from "./forgetPassword.controller";

const router = express.Router();

router.post("/", ForgetPasswordController.sendOTP);
router.post(
  "/update-password-after-otp",
  ForgetPasswordController.updatePasswordAfterOTP
);

export const ForgetPasswordRoute = router;
