import AppError from "../../errors/AppError";
import { TService } from "./service.inrerface";
import { ServiceModel } from "./service.model";

///Create Service into db
const addServiceIntoDB = async (payload: TService) => {
  console.log("Service Payload: ", payload);

  const result = await ServiceModel.create(payload);
  console.log("Service Result: ", result);
  return result;
};

//Get All Service from DB
const getAllServiceFromDB = async () => {
  const result = await ServiceModel.find()
    .sort({
      order: 1,
    })
    .select("title shortDescription");
  return result;
};

//Get All Service from DB
const getAllServiceByAdminFromDB = async () => {
  const result = await ServiceModel.find().sort({
    order: 1,
  });
  return result;
};

//Get All Service from DB By Admin
const getSpecificServiceFromDB = async (serviceId: string) => {
  const result = await ServiceModel.findOne({ _id: serviceId });
  return result;
};

//Delete Service from DB
const deleteServiceFromDB = async (serviceId: string) => {
  const result = await ServiceModel.deleteOne({ _id: serviceId });
  return result;
};

//Update Service
const updatServiceIntoDBFromDB = async (
  serviceId: string,
  payload: TService
) => {
  console.log("User Id in service: ", serviceId);
  console.log("payload in service", payload);

  const result = await ServiceModel.updateOne({ _id: serviceId }, payload, {
    new: true,
  });
  return result;
};

export const serviceServices = {
  addServiceIntoDB,
  getAllServiceFromDB,
  getAllServiceByAdminFromDB,
  getSpecificServiceFromDB,
  deleteServiceFromDB,
  updatServiceIntoDBFromDB,
};
