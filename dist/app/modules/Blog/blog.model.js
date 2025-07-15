"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModel = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: { type: String, required: [true, "Title is required"] },
    image: { type: String, required: [true, "Image is required"] },
    description: { type: String, required: [true, "Description is required"] },
    category: { type: String, required: [true, "Category is required"] },
    author: { type: String, required: [true, "Author is required"] },
    date: { type: String, required: [true, "Date is required"] },
}, { timestamps: true });
exports.BlogModel = (0, mongoose_1.model)("blogs", blogSchema);
