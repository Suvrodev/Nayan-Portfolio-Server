import { TForgetPassword } from "./forgetPassword.interface";
import { model, Schema } from "mongoose";

const forgetPasswordSchema = new Schema<TForgetPassword>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ForgetPasswordModel = model<TForgetPassword>(
  "forgetpassword",
  forgetPasswordSchema
);
