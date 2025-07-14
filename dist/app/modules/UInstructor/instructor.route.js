"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instructorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const instructor_controller_1 = require("./instructor.controller");
const router = express_1.default.Router();
router.post("/register", instructor_controller_1.instructorControllers.registerInstructor);
//Get All User
// router.get("/allusers", auth("admin"), userControllers.getAllUsers);
router.get("/all-instructor", instructor_controller_1.instructorControllers.getAllInstructor);
//Get Single User
router.get("/all-instructor/:id", instructor_controller_1.instructorControllers.getSpecificInstructor);
//delete user
router.delete("/all-instructor/:id", instructor_controller_1.instructorControllers.deleteInstructor);
//update user
router.patch("/all-instructor/:id", instructor_controller_1.instructorControllers.updateInstructor);
//change password
router.patch("/updatepassword/:instructorId", instructor_controller_1.instructorControllers.updatePassword);
// router.patch(
//   "/updatepassword/:userId",
//   auth("user"),
//   userControllers.updatePassword
// );
// router.get("/register", userControllers.getAllUsers);
exports.instructorRoutes = router;
