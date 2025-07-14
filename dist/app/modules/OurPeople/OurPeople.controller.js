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
exports.PeopleController = void 0;
const OurPeople_service_1 = require("./OurPeople.service");
///Add  Our People
const addOurPeople = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const peopleData = req.body;
        console.log("People data come: ", peopleData);
        const result = yield OurPeople_service_1.OurPeopleService.createOurPeopleIntoDB(peopleData);
        res.status(201).json({
            success: true,
            message: "Our People Added successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Our People
const getAllOurPeople = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield OurPeople_service_1.OurPeopleService.getAllOurPeopleFromDB();
        res.status(201).json({
            success: true,
            message: "Our People Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Our People With message
const getAllOurPeopleWithMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield OurPeople_service_1.OurPeopleService.getAllOurPeopleWithMessageFromDB();
        res.status(201).json({
            success: true,
            message: "Our People Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific Our People
const getSpecificOurPeople = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const peopleId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.peopleId;
        console.log("people id: ", peopleId);
        const result = yield OurPeople_service_1.OurPeopleService.getSpecificOurPeopleFromDB(peopleId);
        // console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Our People Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Our People
const deleteOurPeople = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const peopleId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.peopleId;
        console.log("peopleId:=========== ", peopleId);
        const result = yield OurPeople_service_1.OurPeopleService.deleteOurPeopleFromDB(peopleId);
        console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "People Deleted successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Our People
const updateOurPeople = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const peopleId = req.params.peopleId;
        const people = req.body;
        const result = yield OurPeople_service_1.OurPeopleService.updateOurPeopleFromDB(peopleId, people);
        //Send Response
        res.status(200).json({
            message: "People updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.PeopleController = {
    addOurPeople,
    getAllOurPeople,
    getAllOurPeopleWithMessage,
    getSpecificOurPeople,
    deleteOurPeople,
    updateOurPeople,
};
