"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post("/register", user_controller_1.userControllers.registerUser);
//Get All User
// router.get("/allusers", auth("admin"), userControllers.getAllUsers);
router.get("/allusers", user_controller_1.userControllers.getAllUsers);
//Get Single User
router.get("/allusers/:email", user_controller_1.userControllers.getSpecificUsers);
//delete user
router.delete("/allusers/:email", user_controller_1.userControllers.deleteUser);
//update user
router.patch("/allusers/:email", user_controller_1.userControllers.updateUser);
//change password
router.patch("/updatepassword/:email", user_controller_1.userControllers.updatePassword);
// router.patch(
//   "/updatepassword/:userId",
//   auth("user"),
//   userControllers.updatePassword
// );
// router.get("/register", userControllers.getAllUsers);
exports.userRoutes = router;
