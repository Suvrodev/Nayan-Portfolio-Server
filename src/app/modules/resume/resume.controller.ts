import { NextFunction, Request, RequestHandler, Response } from "express";
import { resumeServices } from "./resume.service";

///Add Resume
const addResume: RequestHandler = async (req, res, next) => {
  try {
    const serviceData = req.body;
    const result = await resumeServices.addResumeIntoDB(serviceData);
    res.status(201).json({
      success: true,
      message: "Resume Added successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Get All Resume
const getAllResume: RequestHandler = async (req, res, next) => {
  try {
    const result = await resumeServices.getAllResumeFromDB();
    res.status(201).json({
      success: true,
      message: "Resume Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get Specific Resume
const getSpecificResume: RequestHandler = async (req, res, next) => {
  try {
    const resumeId = req?.params?.resumeId;
    console.log("Resume id: ", resumeId);
    const result = await resumeServices.getSpecificResumeFromDB(resumeId);
    console.log("Result: ", result);
    res.status(201).json({
      success: true,
      message: "Service Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Delete Resume
const deleteResume: RequestHandler = async (req, res, next) => {
  try {
    const resumeId = req?.params?.resumeId;
    console.log("Resume id: ", resumeId);
    const result = await resumeServices.deleteResumeFromDB(resumeId);
    console.log("Result: ", result);
    res.status(201).json({
      success: true,
      message: "Resume Deleted successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Update Resume
const updateResume: RequestHandler = async (req, res, next) => {
  try {
    const resumeId = req.params.resumeId;
    const resume = req.body;
    console.log("Resume body: ", resume);

    const result = await resumeServices.updateResumeIntoDB(resumeId, resume);

    //Send Response
    res.status(200).json({
      message: "Resume updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ResumeController = {
  addResume,
  getAllResume,
  getSpecificResume,
  deleteResume,
  updateResume,
};
