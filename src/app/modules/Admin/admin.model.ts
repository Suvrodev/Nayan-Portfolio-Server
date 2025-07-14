import { Schema, model, connect } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config";
import { NextFunction } from "express";
import { TAdmin } from "./admin.interface";

const adminSchema = new Schema<TAdmin>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      maxlength: [30, "Password cannot be more than 30 characters"],
    },
    image: {
      type: String,
      default: "https://i.ibb.co/d4rvmWjR/logged-User.png",
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    passwordResetCode: {
      type: String,
      default: "123",
    },
  },
  {
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
  }
);

//Pre Document middleware for Bycript Password
// userSchema.pre("save", async function (next) {
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds)
//   );
//   next();
//   // console.log("Now This: ", this);
// });

export const adminModel = model<TAdmin>("admin", adminSchema);
