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
exports.PortfolioControllers = void 0;
const portfolioo_service_1 = require("./portfolioo.service");
///Add Portfolio
const addPortfolio = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send(" Portfolio-add");
    try {
        const portfolioData = req.body;
        const result = yield portfolioo_service_1.portfolioServices.addPortfolioIntoDB(portfolioData);
        res.status(201).json({
            success: true,
            message: "Portfolio Added successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Portfolio
const getAllPortfolio = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send(" Portfolio-Get");
    try {
        const result = yield portfolioo_service_1.portfolioServices.getAllPortfolioFromDB();
        res.status(201).json({
            success: true,
            message: "Portfolio Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific Portfolio
const getSpecificPortfolio = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // res.send(" Portfolio-Specific-get");
    try {
        const portfolioId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.portfolioId;
        const result = yield portfolioo_service_1.portfolioServices.getSpecificPortfolioFromDB(portfolioId);
        console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Portfolio Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Portfolio
const deletePortfolio = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // res.send(" Portfolio-Delete");
    try {
        const portfolioId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.portfolioId;
        console.log("Portfolio ID: ", portfolioId);
        const result = yield portfolioo_service_1.portfolioServices.deletePortfolioFromDB(portfolioId);
        console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Portfolio Deleted successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Portfolio
const updatePortfolio = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send(" Portfolio-Update");
    try {
        const portfolioId = req.params.portfolioId;
        const portfolio = req.body;
        const result = yield portfolioo_service_1.portfolioServices.updatPortfolioIntoDB(portfolioId, portfolio);
        //Send Response
        res.status(200).json({
            message: "Portfolio updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.PortfolioControllers = {
    addPortfolio,
    getAllPortfolio,
    getSpecificPortfolio,
    deletePortfolio,
    updatePortfolio,
};
