import { NextFunction, Request, RequestHandler, Response } from "express";
import { ForgetPasswordService } from "./forgetPassword.service";

///Add Send otp
const sendOTP: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;

    const result = await ForgetPasswordService.SendOTP(email);
    res.status(201).json({
      success: true,
      message: "Reseting Password",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Update Password
const updatePasswordAfterOTP: RequestHandler = async (req, res, next) => {
  try {
    const { email, otp, password } = req.body;
    const result = await ForgetPasswordService.updatPasswordAfterOTPIntoDB(
      email,
      otp,
      password
    );
    res.status(201).json({
      success: true,
      message: "Reseting Password",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const ForgetPasswordController = {
  sendOTP,
  updatePasswordAfterOTP,
};
