import AppError from "../../errors/AppError";
import { TResume } from "./resume.interface";
import { ResumeModel } from "./resume.model";

///Create Resume into db
const addResumeIntoDB = async (payload: TResume) => {
  console.log("Resume Payload: ", payload);

  const result = await ResumeModel.create(payload);
  console.log("Resume Result: ", result);
  return result;
};

//Get All Resume from DB
const getAllResumeFromDB = async () => {
  const result = await ResumeModel.find();

  return result;
};

//Get Specific Resume from DB
const getSpecificResumeFromDB = async (_id: string) => {
  console.log("---------------------------");
  console.log("Resume id: ", _id);
  const result = await ResumeModel.findById({ _id });
  console.log("Result: ", result);
  return result;
};

//Delete Resume from DB
const deleteResumeFromDB = async (resumeId: string) => {
  const result = await ResumeModel.deleteOne({ _id: resumeId });
  return result;
};

//Update Resume
const updateResumeIntoDB = async (portfolioId: string, payload: TResume) => {
  console.log("Resume id: ", portfolioId);
  console.log("payload in Resume", payload);

  const result = await ResumeModel.findByIdAndUpdate(portfolioId, payload, {
    new: true,
  });
  return result;
};

export const resumeServices = {
  addResumeIntoDB,
  getAllResumeFromDB,
  getSpecificResumeFromDB,
  deleteResumeFromDB,
  updateResumeIntoDB,
};
