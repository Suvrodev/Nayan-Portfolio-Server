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
        const { pin } = req.query;
        const result = yield blog_service_1.BlogServices.getAllBlog(pin);
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
// Get All Blog By Admin
const getAllBlogByAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blog_service_1.BlogServices.getAllBlogByAdmin();
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
// Get All Blog By Instructor
const getAllBlogByInstructor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const email = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.email;
        const result = yield blog_service_1.BlogServices.getAllBlogByInstructor(email);
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
        const blogId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        const result = yield blog_service_1.BlogServices.getSingleBlogFromDB(blogId);
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
//Update Blog
const updateBlogPin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        const blogBody = req === null || req === void 0 ? void 0 : req.body;
        const result = yield blog_service_1.BlogServices.updateBlogPinFromDB(blogId, blogBody);
        //Send Response
        res.status(200).json({
            message: "Pin updated successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Blog isEnable
const updateBlogIsEnable = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        const blogBody = req === null || req === void 0 ? void 0 : req.body;
        const result = yield blog_service_1.BlogServices.updateBlogIsEnableFromDB(blogId, blogBody);
        //Send Response
        res.status(200).json({
            message: "isEnable updated successfully",
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
    getAllBlogByAdmin,
    getAllBlogByInstructor,
    getSingleBlog,
    deleteBlog,
    updateBlog,
    updateBlogPin,
    updateBlogIsEnable,
};
