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
exports.PromocodeController = void 0;
const promocode_service_1 = require("./promocode.service");
///Add Promocode
const addPromoCode = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promoCodeData = req.body;
        console.log("Promocode data come: ", promoCodeData);
        const result = yield promocode_service_1.PromoCodeService.addPromoCodeIntoDB(promoCodeData);
        res.status(201).json({
            success: true,
            message: "Promocode Added successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Promocode
const getAllPromoCode = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield promocode_service_1.PromoCodeService.getAllPromoCodeFromDB();
        res.status(201).json({
            success: true,
            message: "Promocode Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific Promocode
const getSpecificPromocode = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const promoId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.promoId;
        console.log("promoId: ", promoId);
        const result = yield promocode_service_1.PromoCodeService.getSpecificPromoFromDB(promoId);
        console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Promocode Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific Promocode based on PromoCode
const getSpecificPromoBasedOnPromoCodeFromDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const promoCode = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.promoCode;
        console.log("Promo Code: ", promoCode);
        const result = yield promocode_service_1.PromoCodeService.getSpecificPromoBasedOnPromoCodeFromDB(promoCode);
        console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Promocode Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Promocode
const deletePromocode = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const promoId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.promoId;
        console.log("promoId: ", promoId);
        const result = yield promocode_service_1.PromoCodeService.deletePromocodeFromDB(promoId);
        console.log("Result: ", result);
        res.status(201).json({
            success: true,
            message: "Promo code Deleted successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Promocode
const updatePromocode = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Controller-----------------------------------------");
        const promoId = req.params.promoId;
        const promoCodeBody = req.body;
        console.log("Promo id: ", promoId);
        console.log("Promo Code Body: ", promoCodeBody);
        const result = yield promocode_service_1.PromoCodeService.UpdatePromoCodeIntoDBFromDB(promoId, promoCodeBody);
        //Send Response
        res.status(200).json({
            message: "Promocode updated successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.PromocodeController = {
    addPromoCode,
    getAllPromoCode,
    getSpecificPromocode,
    getSpecificPromoBasedOnPromoCodeFromDB,
    deletePromocode,
    updatePromocode,
};
