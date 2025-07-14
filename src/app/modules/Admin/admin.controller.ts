import { NextFunction, Request, RequestHandler, Response } from "express";
import AppError from "../../errors/AppError";
import { adminServices } from "./admin.service";

///Register Admin
const registerAdmin: RequestHandler = async (req, res, next) => {
  try {
    const adminData = req.body;
    const result = await adminServices.registerAdminIntoDB(adminData);

    if (!result) {
      res.status(400).json({
        success: true,
        message: "Unscuccessfull Register",
        statusCode: 400,
        data: result,
      });
    }
    res.status(201).json({
      success: true,
      message: "Registration successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Get All Admin
const getAllAdmin: RequestHandler = async (req, res, next) => {
  try {
    const { search } = req.query;
    console.log("search: ", search);
    const result = await adminServices.getAllAdmin(search as string);
    res.status(201).json({
      success: true,
      message: "Admin Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get Specific Admin
const getSpecificAdmin: RequestHandler = async (req, res, next) => {
  try {
    const email = req?.params?.email;
    const result = await adminServices.getSingleAdminFromDB(email);
    res.status(201).json({
      success: true,
      message: "Admin Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//delete  Admin
const deleteAdmin: RequestHandler = async (req, res, next) => {
  try {
    const email = req?.params?.email;
    const result = await adminServices.deleteAdmin(email);

    res.status(201).json({
      success: true,
      message: "Person Deleted successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Update  Admin
const updateAdmin: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  try {
    const email = req?.params?.email;
    const body = req?.body;

    console.log("Come email: ", email);
    console.log("Body ", body);

    const result = await adminServices.updatUserIntoDB(email, body);
    res.status(201).json({
      success: true,
      message: "Person Updated successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

///Update Password
const updatePassword: RequestHandler = async (req, res, next) => {
  try {
    const email = req?.params?.email;
    const userPassword = req.body;
    // console.log("Logged user email : ", req?.user?._id);
    console.log("come user email: ", email);
    // if (req?.user?._id !== userId) {
    //   throw new AppError(403, "You are not authorized");
    // }

    const result = await adminServices.updatePasswordIntoDB(
      email,
      userPassword
    );

    res.status(201).json({
      success: true,
      message: "Password Updated Successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const adminControllers = {
  registerAdmin,
  getAllAdmin,
  deleteAdmin,
  updatePassword,
  updateAdmin,
  getSpecificAdmin,
};
