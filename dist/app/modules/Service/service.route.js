"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoute = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
router.post("/", service_controller_1.ServiceController.addService);
router.get("/", service_controller_1.ServiceController.getAllService);
router.get("/:serviceId", service_controller_1.ServiceController.getSpecificService);
router.delete("/:serviceId", service_controller_1.ServiceController.deleteService);
router.patch("/:serviceId", service_controller_1.ServiceController.updateService);
exports.ServiceRoute = router;
