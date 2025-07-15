import express, { NextFunction, Request, Response } from "express";
import { ServiceController } from "./service.controller";

const router = express.Router();

router.post("/", ServiceController.addService);
router.get("/", ServiceController.getAllService);
router.get("/:serviceId", ServiceController.getSpecificService);
router.delete("/:serviceId", ServiceController.deleteService);
router.patch("/:serviceId", ServiceController.updateService);

export const ServiceRoute = router;
