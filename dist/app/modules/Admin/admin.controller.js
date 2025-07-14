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
exports.adminControllers = void 0;
const admin_service_1 = require("./admin.service");
///Register Admin
const registerAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adminData = req.body;
        const result = yield admin_service_1.adminServices.registerAdminIntoDB(adminData);
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
    }
    catch (error) {
        next(error);
    }
});
//Get All Admin
const getAllAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search } = req.query;
        console.log("search: ", search);
        const result = yield admin_service_1.adminServices.getAllAdmin(search);
        res.status(201).json({
            success: true,
            message: "Admin Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific Admin
const getSpecificAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const email = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.email;
        const result = yield admin_service_1.adminServices.getSingleAdminFromDB(email);
        res.status(201).json({
            success: true,
            message: "Admin Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//delete  Admin
const deleteAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const email = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.email;
        const result = yield admin_service_1.adminServices.deleteAdmin(email);
        res.status(201).json({
            success: true,
            message: "Person Deleted successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update  Admin
const updateAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const email = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.email;
        const body = req === null || req === void 0 ? void 0 : req.body;
        console.log("Come email: ", email);
        console.log("Body ", body);
        const result = yield admin_service_1.adminServices.updatUserIntoDB(email, body);
        res.status(201).json({
            success: true,
            message: "Person Updated successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
///Update Password
const updatePassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const email = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.email;
        const userPassword = req.body;
        // console.log("Logged user email : ", req?.user?._id);
        console.log("come user email: ", email);
        // if (req?.user?._id !== userId) {
        //   throw new AppError(403, "You are not authorized");
        // }
        const result = yield admin_service_1.adminServices.updatePasswordIntoDB(email, userPassword);
        res.status(201).json({
            success: true,
            message: "Password Updated Successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.adminControllers = {
    registerAdmin,
    getAllAdmin,
    deleteAdmin,
    updatePassword,
    updateAdmin,
    getSpecificAdmin,
};
