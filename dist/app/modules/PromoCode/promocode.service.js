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
exports.PromoCodeService = void 0;
const promocode_model_1 = require("./promocode.model");
///Create Promocode into db
const addPromoCodeIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log("Payload: ", payload);
    const result = yield promocode_model_1.promocodeModel.create(payload);
    return result;
});
//Get All Promocode from DB
const getAllPromoCodeFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield promocode_model_1.promocodeModel.find().sort({ order: 1 });
    return result;
});
//Get Specific Promocode
const getSpecificPromoFromDB = (promoId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("---------------------");
    console.log("Promo id--: ", promoId);
    const result = yield promocode_model_1.promocodeModel.findOne({ promoId: promoId });
    console.log("Result: ", result);
    return result;
});
//Get Specific Promocode based on PromoCode
const getSpecificPromoBasedOnPromoCodeFromDB = (promoCode) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield promocode_model_1.promocodeModel.findOne({ promoCode: promoCode });
    return result;
});
//Delete Promocode from DB
const deletePromocodeFromDB = (promoId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield promocode_model_1.promocodeModel.deleteOne({ promoId: promoId });
    return result;
});
//Update Promocode
const UpdatePromoCodeIntoDBFromDB = (promoId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Service---------------------------------------------");
    console.log("promoId: ", promoId);
    console.log("payload", payload);
    const result = yield promocode_model_1.promocodeModel.updateOne({ promoId: promoId }, payload, {
        new: true,
    });
    console.log("Fucking Result: ", result);
    return result;
});
exports.PromoCodeService = {
    addPromoCodeIntoDB,
    getAllPromoCodeFromDB,
    getSpecificPromoFromDB,
    getSpecificPromoBasedOnPromoCodeFromDB,
    deletePromocodeFromDB,
    UpdatePromoCodeIntoDBFromDB,
};
