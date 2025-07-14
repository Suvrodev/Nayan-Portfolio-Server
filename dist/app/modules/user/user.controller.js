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
exports.userControllers = void 0;
const user_service_1 = require("./user.service");
///Register User
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const result = yield user_service_1.userServices.registerUserIntoDB(userData);
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
            message: "User registered successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All User
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search } = req.query;
        console.log("search: ", search);
        const result = yield user_service_1.userServices.getAllUser(search);
        res.status(201).json({
            success: true,
            message: "Users Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific User
const getSpecificUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const email = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.email;
        const result = yield user_service_1.userServices.getSingleUserFromDB(email);
        res.status(201).json({
            success: true,
            message: "Users Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//delete  User
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const email = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.email;
        const result = yield user_service_1.userServices.deleteUser(email);
        res.status(201).json({
            success: true,
            message: "Users Deleted successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update  User
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const email = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.email;
        const body = req === null || req === void 0 ? void 0 : req.body;
        console.log("Come email: ", email);
        console.log("Body ", body);
        const result = yield user_service_1.userServices.updatUserIntoDB(email, body);
        res.status(201).json({
            success: true,
            message: "Users Updated successfully",
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
        const result = yield user_service_1.userServices.updatePasswordIntoDB(email, userPassword);
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
exports.userControllers = {
    registerUser,
    getAllUsers,
    deleteUser,
    updatePassword,
    updateUser,
    getSpecificUsers,
};
