import { NextFunction, Request, RequestHandler, Response } from "express";

import AppError from "../../errors/AppError";
import { BlogServices } from "./blog.service";

//Create Blog
const createBlog: RequestHandler = async (req, res, next) => {
  try {
    const blog = req.body;

    //will call service function to send data in db
    const result = await BlogServices.createBlogIntoDB(blog);

    //Send Response
    res.status(200).json({
      message: "Blog Added successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Blog
const getAllBlog: RequestHandler = async (req, res, next) => {
  try {
    const { pin } = req.query;
    const result = await BlogServices.getAllBlog(pin as string);

    // Send response with the results
    res.status(200).json({
      message: "Blog retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};
// Get All Blog By Admin
const getAllBlogByAdmin: RequestHandler = async (req, res, next) => {
  try {
    const result = await BlogServices.getAllBlogByAdmin();
    // Send response with the results
    res.status(200).json({
      message: "Blog retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

// Get All Blog By Instructor
const getAllBlogByInstructor: RequestHandler = async (req, res, next) => {
  try {
    const email = req?.params?.email;
    const result = await BlogServices.getAllBlogByInstructor(email);
    // Send response with the results
    res.status(200).json({
      message: "Blog retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

// Get Single Blog
const getSingleBlog: RequestHandler = async (req, res, next) => {
  try {
    const blogId = req?.params?.id;
    const result = await BlogServices.getSingleBlogFromDB(blogId);

    // Send response with the results
    res.status(200).json({
      message: "Blog retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Delete Blog
const deleteBlog: RequestHandler = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const result = await BlogServices.deleteBlogFromDB(blogId);

    //Send Response
    res.status(200).json({
      message: "Blog deleted successfully ",
      success: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Update Blog
const updateBlog: RequestHandler = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const blogBody = req?.body;
    const result = await BlogServices.updateBlogFromDB(blogId, blogBody);

    //Send Response
    res.status(200).json({
      message: "Blog updated successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Update Blog
const updateBlogPin: RequestHandler = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const blogBody = req?.body;
    const result = await BlogServices.updateBlogPinFromDB(blogId, blogBody);

    //Send Response
    res.status(200).json({
      message: "Pin updated successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Update Blog isEnable
const updateBlogIsEnable: RequestHandler = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const blogBody = req?.body;
    const result = await BlogServices.updateBlogIsEnableFromDB(
      blogId,
      blogBody
    );

    //Send Response
    res.status(200).json({
      message: "isEnable updated successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const BlogControllers = {
  createBlog,
  getAllBlog,
  getAllBlogByAdmin,
  getAllBlogByInstructor,
  getSingleBlog,
  deleteBlog,
  updateBlog,
  updateBlogPin,
  updateBlogIsEnable,
};
