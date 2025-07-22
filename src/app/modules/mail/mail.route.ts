import express from "express";
import { MailController } from "./mail.controller";

const router = express.Router();

//will call controller function
router.post("/", MailController.sendMailController);

export const MailRoute = router;
