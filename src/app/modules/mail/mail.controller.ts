import { NextFunction, Request, RequestHandler, Response } from "express";
import { MailService } from "./mail.service";

///Add Service
const sendMailController: RequestHandler = async (req, res, next) => {
  try {
    const mailData = req.body;
    const result = await MailService.sendMailService(mailData);
    res.status(201).json({
      success: true,
      message: "Mail sent Successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const MailController = {
  sendMailController,
};
