"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const router = express_1.default.Router();
router.post("/register", admin_controller_1.adminControllers.registerAdmin);
//Get All Admin
// router.get("/allusers", auth("admin"), userControllers.getAllUsers);
router.get("/all-Admin", admin_controller_1.adminControllers.getAllAdmin);
//Get Single User
router.get("/all-Admin/:email", admin_controller_1.adminControllers.getSpecificAdmin);
//delete user
router.delete("/all-Admin/:email", admin_controller_1.adminControllers.deleteAdmin);
//update user
router.patch("/all-Admin/:email", admin_controller_1.adminControllers.updateAdmin);
//change password
router.patch("/all-Admin/updatepassword/:email", admin_controller_1.adminControllers.updatePassword);
// router.patch(
//   "/updatepassword/:userId",
//   auth("user"),
//   userControllers.updatePassword
// );
// router.get("/register", userControllers.getAllUsers);
exports.adminRoutes = router;
