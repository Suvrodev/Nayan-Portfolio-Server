import express, { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { userValidations } from "./userValidation";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";
import { adminControllers } from "./admin.controller";
const router = express.Router();

router.post("/register", adminControllers.registerAdmin);
//Get All Admin
// router.get("/allusers", auth("admin"), userControllers.getAllUsers);
router.get("/all-Admin", adminControllers.getAllAdmin);

//Get Single User
router.get("/all-Admin/:email", adminControllers.getSpecificAdmin);
//delete user
router.delete("/all-Admin/:email", adminControllers.deleteAdmin);
//update user
router.patch("/all-Admin/:email", adminControllers.updateAdmin);
//change password
router.patch(
  "/all-Admin/updatepassword/:email",
  adminControllers.updatePassword
);
// router.patch(
//   "/updatepassword/:userId",
//   auth("user"),
//   userControllers.updatePassword
// );
// router.get("/register", userControllers.getAllUsers);

export const adminRoutes = router;
