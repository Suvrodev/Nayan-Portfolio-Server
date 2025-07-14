"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInstructorValidation = void 0;
const zod_1 = require("zod");
const loginValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "Email is required",
    })
        .email("Invalid email address")
        .trim(),
    password: zod_1.z.string({
        required_error: "Password is required",
    }),
});
exports.AuthInstructorValidation = { loginValidationSchema };
