"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailRoute = void 0;
const express_1 = __importDefault(require("express"));
const mail_controller_1 = require("./mail.controller");
const router = express_1.default.Router();
//will call controller function
router.post("/", mail_controller_1.MailController.sendMailController);
exports.MailRoute = router;
