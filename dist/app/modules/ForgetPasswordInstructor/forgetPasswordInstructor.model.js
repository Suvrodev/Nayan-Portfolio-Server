"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgetPasswordModel = void 0;
const mongoose_1 = require("mongoose");
const forgetPasswordSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
}, {
    timestamps: true,
});
exports.ForgetPasswordModel = (0, mongoose_1.model)("forgetpassword", forgetPasswordSchema);
