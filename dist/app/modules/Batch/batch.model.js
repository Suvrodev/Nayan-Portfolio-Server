"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchModel = void 0;
const mongoose_1 = require("mongoose");
// Create Mongoose Schema
const batchSchema = new mongoose_1.Schema({
    batchId: {
        type: String,
        required: [true, "Batch id is required"],
        trim: true,
    },
    batchName: {
        type: String,
        required: [true, "Batch Name is required"],
        trim: true,
    },
    underCourse: {
        type: String,
        required: [true, "Batch under which course is required"],
        trim: true,
    },
    coursePrice: {
        type: Number,
        required: [true, "Course Price must be required"],
        trim: true,
    },
    courseDiscount: {
        type: Number,
        required: [true, "Course Discount must be required"],
        trim: true,
    },
    start: {
        type: String,
        required: [true, "Start date is required"],
        validate: {
            validator: function (value) {
                return !value || /^\d{4}-\d{2}-\d{2}$/.test(value);
            },
            message: "Start date must be in YYYY-MM-DD format",
        },
    },
    end: {
        type: String,
        validate: {
            validator: function (value) {
                return !value || /^\d{4}-\d{2}-\d{2}$/.test(value);
            },
            message: "End date must be in YYYY-MM-DD format",
        },
    },
    duration: {
        type: String,
        required: [true, "Batch duration is required"],
        trim: true,
    },
    classNumber: {
        type: Number,
        required: [true, "Number of classes is required"],
        min: [1, "There must be at least 1 class"],
    },
    projectnumber: {
        type: Number,
    },
    instructorId: {
        type: String,
        required: [true, "Instructor id is required"],
        trim: true,
    },
    instructorname: {
        type: String,
        required: [true, "Instructor name is required"],
        trim: true,
    },
    instructorimage: {
        type: String,
        required: [true, "Instructor image URL is required"],
        trim: true,
    },
    instructorfb: {
        type: String,
        trim: true,
    },
    classdays: {
        type: String,
        required: [true, "Class days information is required"],
        trim: true,
    },
    supportdays: {
        type: String,
        required: [true, "Support days information is required"],
        trim: true,
    },
    batchStatus: {
        type: String,
        required: [true, "Batch status is required"],
        enum: {
            values: ["onGoing", "upComing", "end"],
            message: "Batch status must be one of: onGoing, upComing, ended",
        },
    },
    batchNotice: {
        type: String,
        default: "",
    },
    schedule: [
        {
            date: {
                type: String,
                required: [true, "Date is required"],
                trim: true,
            },
            topic: {
                type: String,
                required: [true, "Topic is required"],
                trim: true,
            },
        },
    ],
}, { timestamps: true });
exports.BatchModel = (0, mongoose_1.model)("batch", batchSchema);
