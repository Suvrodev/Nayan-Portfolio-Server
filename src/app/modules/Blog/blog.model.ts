import { Schema, model, connect, Types } from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: [true, "Title is required"] },
    image: { type: String, required: [true, "Image is required"] },
    description: { type: String, required: [true, "Description is required"] },
    category: { type: String, required: [true, "Category is required"] },
    author: { type: String, required: [true, "Author is required"] },
    date: { type: String, required: [true, "Date is required"] },
  },
  { timestamps: true }
);

export const BlogModel = model<TBlog>("blogs", blogSchema);
