"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogControllers = void 0;
const blog_service_1 = require("./blog.service");
//Create Blog
const createBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = req.body;
        //will call service function to send data in db
        const result = yield blog_service_1.BlogServices.createBlogIntoDB(blog);
        //Send Response
        res.status(200).json({
            message: "Blog Added successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get All Blog
const getAllBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blog_service_1.BlogServices.getAllBlog();
        // Send response with the results
        res.status(200).json({
            message: "Blog retrieved successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get Single Blog
const getSingleBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const blogTitle = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.blogTitle;
        const result = yield blog_service_1.BlogServices.getSingleBlogFromDB(blogTitle);
        // Send response with the results
        res.status(200).json({
            message: "Blog retrieved successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Blog
const deleteBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        const result = yield blog_service_1.BlogServices.deleteBlogFromDB(blogId);
        //Send Response
        res.status(200).json({
            message: "Blog deleted successfully ",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Blog
const updateBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        const blogBody = req === null || req === void 0 ? void 0 : req.body;
        const result = yield blog_service_1.BlogServices.updateBlogFromDB(blogId, blogBody);
        //Send Response
        res.status(200).json({
            message: "Blog updated successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.BlogControllers = {
    createBlog,
    getAllBlog,
    getSingleBlog,
    deleteBlog,
    updateBlog,
};
