"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareRoutes = void 0;
const express_1 = __importDefault(require("express"));
const software_controller_1 = require("./software.controller");
const router = express_1.default.Router();
//will call controller function
router.post("/", software_controller_1.SoftwareController.insertSoftware);
router.get("/:courseRef", software_controller_1.SoftwareController.getAllSoftwareAccordingToCourse);
router.delete("/:softwareId", software_controller_1.SoftwareController.deleteSoftware);
router.patch("/:softwareId", software_controller_1.SoftwareController.updateSoftware);
//Admin
// router.delete("/:productId", auth("admin"), BookControllers.deleteBook);
// router.put("/:productId", auth("admin"), BookControllers.updateBook);
// router.get("/admin/getbook", auth("admin"), BookControllers.getAllBookByAdmin);
exports.SoftwareRoutes = router;
