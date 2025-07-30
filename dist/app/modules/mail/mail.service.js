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
exports.MailService = void 0;
const sendMail_1 = require("../utils/sendMail");
//Send Mail
const sendMailService = (mailData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("----------------------------");
    console.log("Mail Data: ", mailData);
    const { name, email, phone, subject, message } = mailData;
    console.log("Mail Data: ", mailData);
    yield (0, sendMail_1.sendEmail)(name, email, phone, subject, message);
    const result = {};
    return result;
});
exports.MailService = {
    sendMailService,
};
