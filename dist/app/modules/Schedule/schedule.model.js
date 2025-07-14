"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleModel = void 0;
const mongoose_1 = require("mongoose");
const scheduleSchema = new mongoose_1.Schema({
    courseRef: {
        type: String,
        required: [true, "Course Ref is required"],
    },
    date: {
        type: String,
        required: [true, "date is required"],
    },
    time: {
        type: String,
        required: [true, "Time is required"],
    },
    data: {
        type: String,
        required: [true, "Data is required"],
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});
exports.ScheduleModel = (0, mongoose_1.model)("schedule", scheduleSchema);
