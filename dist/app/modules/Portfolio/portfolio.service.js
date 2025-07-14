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
exports.portfolioService = void 0;
const portfolio_model_1 = require("./portfolio.model");
///Create Portfolio into db
const addPortfolioIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Portfolio Payload: ", payload);
    const result = yield portfolio_model_1.PortfolioModel.create(payload);
    console.log("Portfolio Result: ", result);
    return result;
});
//Get All Portfolio from DB
const getAllPortfolioFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield portfolio_model_1.PortfolioModel.find()
        .sort({
        order: 1,
    })
        .select("image title category");
    return result;
});
//Get Specific Portfolio from DB
const getSpecificPortfolioFromDB = (title) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield portfolio_model_1.PortfolioModel.findOne({ title: title });
    return result;
});
//Delete Portfolio from DB
const deletePortfolioFromDB = (portfolioId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield portfolio_model_1.PortfolioModel.deleteOne({ _id: portfolioId });
    return result;
});
//Update Portfolio
const updatPortfolioIntoDB = (serviceId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("User Id in service: ", serviceId);
    console.log("payload in service", payload);
    const result = yield portfolio_model_1.PortfolioModel.updateOne({ _id: serviceId }, payload, {
        new: true,
    });
    return result;
});
exports.portfolioService = {
    addPortfolioIntoDB,
    getAllPortfolioFromDB,
    getSpecificPortfolioFromDB,
    deletePortfolioFromDB,
    updatPortfolioIntoDB,
};
