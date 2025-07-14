import { NextFunction, Request, RequestHandler, Response } from "express";
import { serviceServices } from "./service.service";

///Add Service
const addService: RequestHandler = async (req, res, next) => {
  try {
    const serviceData = req.body;
    const result = await serviceServices.addServiceIntoDB(serviceData);
    res.status(201).json({
      success: true,
      message: "Service Added successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Get All Service
const getAllService: RequestHandler = async (req, res, next) => {
  try {
    const result = await serviceServices.getAllServiceFromDB();
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
//Get All Service by Admin
const getAllServiceByAdmin: RequestHandler = async (req, res, next) => {
  try {
    const result = await serviceServices.getAllServiceByAdminFromDB();
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

//Get Specific Service
const getSpecificService: RequestHandler = async (req, res, next) => {
  try {
    const serviceId = req?.params?.serviceId;
    console.log("service id: ", serviceId);
    const result = await serviceServices.getSpecificServiceFromDB(serviceId);
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

//Delete Service
const deleteService: RequestHandler = async (req, res, next) => {
  try {
    const serviceId = req?.params?.serviceId;
    console.log("service id: ", serviceId);
    const result = await serviceServices.deleteServiceFromDB(serviceId);
    console.log("Result: ", result);
    res.status(201).json({
      success: true,
      message: "Service Deleted successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Update Service
const updateService: RequestHandler = async (req, res, next) => {
  try {
    const serviceId = req.params.serviceId;
    const service = req.body;

    const result = await serviceServices.updatServiceIntoDBFromDB(
      serviceId,
      service
    );

    //Send Response
    res.status(200).json({
      message: "Service updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ServiceController = {
  addService,
  getAllServiceByAdmin,
  getAllService,
  getSpecificService,
  deleteService,
  updateService,
};
