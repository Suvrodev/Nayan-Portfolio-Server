import { Schema, model } from "mongoose";
import { TResume } from "./resume.interface";

const resumeSchema = new Schema<TResume>(
  {
    resume: {
      type: String,
      required: [true, "Resume is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ResumeModel = model<TResume>("resume", resumeSchema);
