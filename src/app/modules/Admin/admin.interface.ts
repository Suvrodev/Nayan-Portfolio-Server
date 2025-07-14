import { Schema, model, connect } from "mongoose";

export type TAdmin = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  image?: string;
  role: "admin" | "user";
  isBlocked: boolean;
  passwordResetCode: string;
};
