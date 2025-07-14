"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignStudentModel = void 0;
const mongoose_1 = require("mongoose");
// Create Mongoose Schema
const AssignStudentSchema = new mongoose_1.Schema({
    studentId: {
        type: String,
        required: [true, "Student id is required"],
    },
    studentName: {
        type: String,
        required: [true, "Student Name is required"],
    },
    studentEmail: {
        type: String,
        required: [true, "Student Email is required"],
    },
    studentPhone: {
        type: String,
        required: [true, "Student Phone is required"],
    },
    courseId: {
        type: String,
        required: [true, "courseId is required"],
    },
    batchId: {
        type: String,
        required: [true, "batchId is required"],
    },
    batchName: {
        type: String,
        required: [true, "batchName is required"],
    },
    coursePrice: {
        type: Number,
        required: [true, "coursePrice is required"],
    },
    courseDiscount: {
        type: Number,
        required: [true, "courseDiscount is required"],
    },
    promoCodeStatus: {
        type: String,
        // required: [true, "promoCodeStatus is required"],
    },
    promoCode: {
        type: String,
    },
    appliedpromoCode: {
        type: String,
    },
    promoPercent: {
        type: Number,
    },
    finalPrice: {
        type: Number,
        required: [true, "promoCode is required"],
    },
    // paymentGateWay: {
    //   type: String,
    //   required: [true, "Payment Gateway is required"],
    // },
    transactionId: {
        type: String,
        required: [true, "transactionId is required"],
    },
    checkTransactionId: { type: String },
    transactionMobileNumber: {
        type: String,
    },
    status: { type: Boolean, required: true, default: false },
}, { timestamps: true });
exports.AssignStudentModel = (0, mongoose_1.model)("assignStudent", AssignStudentSchema);
