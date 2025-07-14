"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceModel = void 0;
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
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
    shortDescription: {
        type: String,
        required: [true, "Short Description is required"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
    },
    skillAndTools: [
        {
            title: {
                type: String,
                required: true,
                trim: true,
            },
            percent: {
                type: Number,
                required: true,
            },
        },
    ],
    order: {
        type: Number,
        required: [true, "Order is required"],
        trim: true,
    },
}, {
    timestamps: true,
});
exports.ServiceModel = (0, mongoose_1.model)("service", serviceSchema);
