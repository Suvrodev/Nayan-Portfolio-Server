"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeModel = void 0;
const mongoose_1 = require("mongoose");
const resumeSchema = new mongoose_1.Schema({
    resume: {
        type: String,
        required: [true, "Resume is required"],
        trim: true,
    },
}, {
    timestamps: true,
});
exports.ResumeModel = (0, mongoose_1.model)("resume", resumeSchema);
