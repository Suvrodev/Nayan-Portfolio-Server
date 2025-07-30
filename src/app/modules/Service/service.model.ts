import { Schema, model } from "mongoose";
import { TService } from "./service.inrerface";

const serviceSchema = new Schema<TService>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    shortDescription: {
      type: String,
      required: [true, "Short Description is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    skillAndTools: [
      {
        title: {
          type: String,
          // required: true,
          trim: true,
        },
        percent: {
          type: Number,
          // required: true,
        },
      },
    ],
    order: {
      type: Number,
      required: [true, "Order is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ServiceModel = model<TService>("service", serviceSchema);
