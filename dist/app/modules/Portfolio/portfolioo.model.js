"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioModel = void 0;
const mongoose_1 = require("mongoose");
const portfolioSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    image: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        trim: true,
    },
    link: {
        type: String,
        required: [true, "Link is required"],
        trim: true,
    },
}, {
    timestamps: true,
});
exports.PortfolioModel = (0, mongoose_1.model)("portfolio", portfolioSchema);
