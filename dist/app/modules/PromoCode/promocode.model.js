"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promocodeModel = void 0;
const mongoose_1 = require("mongoose");
const promoCodeSchma = new mongoose_1.Schema({
    promoId: {
        type: String,
        required: [true, "Promo ID is required"],
        unique: true,
        trim: true,
    },
    promoCode: {
        type: String,
        required: [true, "Promo Code is required"],
        unique: true,
        trim: true,
        minlength: [3, "Promo Code must be at least 3 characters long"],
    },
    promoPercent: {
        type: Number,
        required: [true, "Promo Percent is required"],
        min: [1, "Promo Percent must be at least 1%"],
        max: [100, "Promo Percent cannot exceed 100%"],
    },
    promoStatus: {
        type: String,
        enum: ["yes", "no"],
        required: [true, "Promo Status is required"],
        default: "no",
    },
}, {
    timestamps: true,
});
exports.promocodeModel = (0, mongoose_1.model)("promocode", promoCodeSchma);
