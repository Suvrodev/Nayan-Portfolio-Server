"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceServices = void 0;
const service_model_1 = require("./service.model");
///Create Service into db
const addServiceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Service Payload: ", payload);
    const result = yield service_model_1.ServiceModel.create(payload);
    console.log("Service Result: ", result);
    return result;
});
//Get All Service from DB
const getAllServiceFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.ServiceModel.find()
        .sort({
        order: 1,
    })
        .select("title shortDescription");
    return result;
});
//Get All Service from DB By Admin
const getSpecificServiceFromDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.ServiceModel.findOne({ _id: serviceId });
    return result;
});
//Delete Service from DB
const deleteServiceFromDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.ServiceModel.deleteOne({ _id: serviceId });
    return result;
});
//Update Service
const updatServiceIntoDBFromDB = (serviceId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("User Id in service: ", serviceId);
    console.log("payload in service", payload);
    const result = yield service_model_1.ServiceModel.updateOne({ _id: serviceId }, payload, {
        new: true,
    });
    return result;
});
exports.serviceServices = {
    addServiceIntoDB,
    getAllServiceFromDB,
    getSpecificServiceFromDB,
    deleteServiceFromDB,
    updatServiceIntoDBFromDB,
};
