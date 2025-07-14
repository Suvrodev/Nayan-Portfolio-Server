"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModel = void 0;
const mongoose_1 = require("mongoose");
const CourseSchema = new mongoose_1.Schema({
    refServiceId: {
        type: String,
        required: [true, "RefServiceId is required"],
        trim: true,
    },
    courseId: {
        type: String,
        required: [true, "Course ID is required"],
        trim: true,
    },
    courseTitle: {
        type: String,
        required: [true, "Course title is required"],
        trim: true,
    },
    courseImage: {
        type: String,
        required: [true, "Course image URL is required"],
        trim: true,
    },
    courseDescription: {
        type: String,
        required: [true, "Course description is required"],
        trim: true,
        minlength: [10, "Course description must be at least 10 characters long"],
    },
    coursePrice: {
        type: Number,
        required: [true, "Course price is required"],
        min: [0, "Course price can't be less than 0"],
    },
    courseDiscount: {
        type: Number,
        min: [0, "Discount can't be less than 0"],
        max: [100, "Discount can't be more than 100"],
    },
    courseDiscountReason: {
        type: String,
        trim: true,
    },
    courseYoutubeVideo: {
        type: String,
        trim: true,
    },
    courseClassNumber: {
        type: String,
        required: [true, "Number of classes is required"],
        min: [1, "Number of classes must be at least 1"],
    },
    courseDuration: {
        type: String,
        required: [true, "Course duration is required"],
        trim: true,
    },
    courseProjectNumber: {
        type: String,
    },
    courseReview: {
        type: Number,
        min: [0, "Review score can't be less than 0"],
        max: [5, "Review score can't be more than 5"],
    },
    computerConfiguration: {
        type: String,
        required: [true, "Computer configuration is required"],
        trim: true,
    },
    courseExists: {
        type: String,
        required: [true, "Course existence status is required"],
    },
    kikipaschen: {
        type: [String],
        required: [true, "Kikipaschen is required"],
        validate: {
            validator: function (value) {
                return value.length > 0;
            },
            message: "At least one Kikipaschen is required",
        },
    },
    courseCurriculum: {
        type: [String],
        required: [true, "Course curriculum is required"],
        validate: {
            validator: function (value) {
                return value.length > 0;
            },
            message: "At least one course curriculum item is required",
        },
    },
    jobposition: {
        type: [String],
        required: [true, "Job position is required"],
        validate: {
            validator: function (value) {
                return value.length > 0;
            },
            message: "At least one job position is required",
        },
    },
    projects: {
        type: [String],
        required: [true, "Projects are required"],
        validate: {
            validator: function (value) {
                return value.length > 0;
            },
            message: "At least one project is required",
        },
    },
    neededSoftware: [
        {
            image: {
                type: String,
                required: [true, "Software image is required"],
                trim: true,
            },
            title: {
                type: String,
                required: [true, "Software title is required"],
                trim: true,
            },
        },
    ],
    courseOrder: {
        type: Number,
    },
}, { timestamps: true });
exports.CourseModel = (0, mongoose_1.model)("course", CourseSchema);
