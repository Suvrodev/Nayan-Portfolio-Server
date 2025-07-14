"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instructorModel = void 0;
const mongoose_1 = require("mongoose");
const instructorSchema = new mongoose_1.Schema({
    instructorId: {
        type: Number,
        trim: true,
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, "Phone Number is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true, // Ensures uniqueness in the database
        lowercase: true,
        trim: true,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please enter a valid email address",
        ], // Validates proper email format
    },
    password: {
        type: String,
        required: [true, "Password Must be required"],
        maxlength: [30, "Password can not be more than 30 character"],
    },
    image: {
        type: String,
        default: "https://i.ibb.co/d4rvmWjR/logged-User.png",
    },
    gender: { type: String, default: "" },
    ageRange: { type: String, default: "" },
    deviceType: { type: String, default: "" },
    internetType: { type: String, default: "" },
    areaType: { type: String, default: "" },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    presentAddress: { type: String, default: "" },
    permanentAddress: { type: String, default: "" },
    currentEducation: { type: String, default: "" },
    educationInstitute: { type: String, default: "" },
    facebookUrl: { type: String, default: "" },
    twitterUrl: { type: String, default: "" },
    linkedinUrl: { type: String, default: "" },
    githubUrl: { type: String, default: "" },
    whatsappNumber: { type: String, default: "" },
    role: {
        type: String,
        required: [true, "Role is required"],
        default: "instructor",
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        enum: ["enable", "disable"],
        default: "disable",
    },
    passwordResetCode: {
        type: String,
        default: "123",
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    toJSON: {
        transform: function (_doc, ret) {
            // Remove sensitive or unnecessary fields
            delete ret.password;
            // delete ret.role;
            // delete ret.isBlocked;
            delete ret.createdAt;
            delete ret.updatedAt;
            delete ret.__v;
        },
    },
});
exports.instructorModel = (0, mongoose_1.model)("instructor", instructorSchema);
