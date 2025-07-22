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
exports.MailController = void 0;
const mail_service_1 = require("./mail.service");
///Add Service
const sendMailController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mailData = req.body;
        const result = yield mail_service_1.MailService.sendMailService(mailData);
        res.status(201).json({
            success: true,
            message: "Mail sent Successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.MailController = {
    sendMailController,
};
