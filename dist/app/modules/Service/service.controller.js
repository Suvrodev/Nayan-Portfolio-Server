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
exports.ServiceController = void 0;
const service_service_1 = require("./service.service");
///Add Service
const addService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceData = req.body;
        const result = yield service_service_1.serviceServices.addServiceIntoDB(serviceData);
        res.status(201).json({
            success: true,
            message: "Service Added successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Service
const getAllService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.serviceServices.getAllServiceFromDB();
        res.status(201).json({
            success: true,
            message: "Service Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Service by Admin
const getAllServiceByAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.serviceServices.getAllServiceByAdminFromDB();
        res.status(201).json({
            success: true,
            message: "Service Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific Service
const getSpecificService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const serviceId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.serviceId;
        console.log("service id: ", serviceId);
        const result = yield service_service_1.serviceServices.getSpecificServiceFromDB(serviceId);
        console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Service Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Service
const deleteService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const serviceId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.serviceId;
        console.log("service id: ", serviceId);
        const result = yield service_service_1.serviceServices.deleteServiceFromDB(serviceId);
        console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Service Deleted successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Service
const updateService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceId = req.params.serviceId;
        const service = req.body;
        const result = yield service_service_1.serviceServices.updatServiceIntoDBFromDB(serviceId, service);
        //Send Response
        res.status(200).json({
            message: "Service updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.ServiceController = {
    addService,
    getAllServiceByAdmin,
    getAllService,
    getSpecificService,
    deleteService,
    updateService,
};
