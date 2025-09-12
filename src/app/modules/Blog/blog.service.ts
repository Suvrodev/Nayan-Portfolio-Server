import { SortOrder } from "mongoose";
import AppError from "../../errors/AppError";
import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

//create Blog By Admin
const createBlogIntoDB = async (blogData: TBlog) => {
  console.log("In blog service: ------------", blogData);
  const result = await BlogModel.create(blogData);

  return result;
};

///Get All Blog
const getAllBlog = async () => {
  const res = await BlogModel.find().select(
    "title image date category description"
  );

  return res;
};

//Get Single Blog
const getSingleBlogFromDB = async (_id: string) => {
  try {
    const result = await BlogModel.findById({ _id });
    return result;
  } catch (error) {
    throw new Error("Blog Not Found");
  }
};

//delete Blog
const deleteBlogFromDB = async (blogId: string) => {
  //main work
  const result = await BlogModel.findByIdAndDelete({ _id: blogId });
  return result;
};

//Update Blog
const updateBlogFromDB = async (blogId: string, blogData: TBlog) => {
  console.log("blog id:", blogId);
  console.log("Update Data: ", blogData);
  const result = await BlogModel.findByIdAndUpdate({ _id: blogId }, blogData, {
    new: true,
  });
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlog,
  getSingleBlogFromDB,
  deleteBlogFromDB,
  updateBlogFromDB,
};
