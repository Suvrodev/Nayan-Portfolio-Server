import { Schema, model, connect, Types } from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: [true, "Title is required"] },
    content: { type: String, required: [true, "Content is required"] },
    image: { type: String, required: [true, "Image is required"] },
    writer: { type: String, required: [true, "Writer Name is Required"] },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: [
          "Frontend Development",
          "Backend Development",
          "Full-Stack Development",
          "Graphics Design",
          "3d Design",
          "UI/UX Design",
          "Motion Graphics",
          "Game Developing",
          "UnReal engine",
          "Netwrorking",
          "C",
          "C++",
          "Python",
          "ICT-11",
          "Database Management",
          "DevOps & Deployment",
          "API Development",
          "Web Security",
          "Performance Optimization",
          "Testing & Debugging",
          "Mobile Responsive Design",
          "SEO & Web Analytics",
          "Content Management Systems (CMS)",
          "E-commerce Development",
          "Web3 & Blockchain Development",
        ],
        message: "{VALUE} is not a valid category.",
      },
    },
    writerId: {
      type: String || Number,
      required: [true, "Writer id is requires"],
      default: "",
    },
    writerEmail: {
      type: String,
      required: [true, "Writer Email is requires"],
      default: "",
    },
    isEnable: {
      type: String,
      enum: ["yes", "no"],
      default: "no",
    },
    pin: {
      type: String,
      enum: ["yes", "no"],
      default: "no",
    },
  },
  { timestamps: true }
);

export const BlogModel = model<TBlog>("blogs", blogSchema);
