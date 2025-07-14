"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurriculumModel = void 0;
const mongoose_1 = require("mongoose");
const CurriculumSchema = new mongoose_1.Schema({
    title: { type: String, required: [true, "Curriculum title is required"] },
    courseId: {
        type: String,
        required: [true, "Course ref id is required"],
    },
    order: { type: Number, required: [true, "Curriculum order is required"] },
}, { timestamps: true });
exports.CurriculumModel = (0, mongoose_1.model)("Curriculum", CurriculumSchema);
