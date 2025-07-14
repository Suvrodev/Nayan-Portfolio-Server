"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareModel = void 0;
const mongoose_1 = require("mongoose");
const softwareSchema = new mongoose_1.Schema({
    courseRef: {
        type: String,
        required: [true, "Course Ref is required"],
    },
    softwareName: {
        type: String,
        required: [true, "Software name is required"],
    },
    softwareImage: {
        type: String,
        required: [true, "Software Image is required"],
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});
exports.SoftwareModel = (0, mongoose_1.model)("software", softwareSchema);
