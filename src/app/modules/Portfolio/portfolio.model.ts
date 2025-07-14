import { Schema, model } from "mongoose";
import { TPortfolio } from "./portfolio.interface";

const portfolioSchema = new Schema<TPortfolio>(
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

    price: {
      type: Number,
      required: [true, "Price is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    link: {
      type: String,
      required: [true, "Link is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const PortfolioModel = model<TPortfolio>("portfolio", portfolioSchema);
