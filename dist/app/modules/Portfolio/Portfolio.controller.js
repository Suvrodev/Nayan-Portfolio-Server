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
exports.PortfolioController = void 0;
const portfolio_service_1 = require("./portfolio.service");
///Add Portfolio
const addPortfolio = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const portfolioData = req.body;
        const result = yield portfolio_service_1.portfolioService.addPortfolioIntoDB(portfolioData);
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
    try {
        const result = yield portfolio_service_1.portfolioService.getAllPortfolioFromDB();
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
    try {
        const portfolioTitle = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.portfolioTitle;
        console.log("------------------------");
        console.log("Portfolio Title: ", portfolioTitle);
        const result = yield portfolio_service_1.portfolioService.getSpecificPortfolioFromDB(portfolioTitle);
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
    try {
        const portfolioId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.portfolioId;
        console.log("Portfolio ID: ", portfolioId);
        const result = yield portfolio_service_1.portfolioService.deletePortfolioFromDB(portfolioId);
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
    try {
        const portfolioId = req.params.serviceId;
        const portfolio = req.body;
        const result = yield portfolio_service_1.portfolioService.updatPortfolioIntoDB(portfolioId, portfolio);
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
exports.PortfolioController = {
    addPortfolio,
    getAllPortfolio,
    getSpecificPortfolio,
    deletePortfolio,
    updatePortfolio,
};
