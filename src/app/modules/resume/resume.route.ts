import express, { NextFunction, Request, Response } from "express";
import { ResumeController } from "./resume.controller";

const router = express.Router();

router.post("/", ResumeController.addResume);
router.get("/", ResumeController.getAllResume);
router.get("/:resumeId", ResumeController.getSpecificResume);
router.delete("/:resumeId", ResumeController.deleteResume);
router.patch("/:resumeId", ResumeController.updateResume);

export const resumeRoutes = router;
