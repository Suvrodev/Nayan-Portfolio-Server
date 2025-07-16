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
exports.BlogServices = void 0;
const blog_model_1 = require("./blog.model");
//create Blog By Admin
const createBlogIntoDB = (blogData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("In blog service: ------------", blogData);
    const result = yield blog_model_1.BlogModel.create(blogData);
    return result;
});
///Get All Blog
const getAllBlog = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield blog_model_1.BlogModel.find().select("title image date category");
    return res;
});
//Get Single Blog
const getSingleBlogFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blog_model_1.BlogModel.findById({ _id });
        return result;
    }
    catch (error) {
        throw new Error("Blog Not Found");
    }
});
//delete Blog
const deleteBlogFromDB = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    //main work
    const result = yield blog_model_1.BlogModel.findByIdAndDelete({ _id: blogId });
    return result;
});
//Update Blog
const updateBlogFromDB = (blogId, blogData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("blog id:", blogId);
    console.log("Update Data: ", blogData);
    const result = yield blog_model_1.BlogModel.findByIdAndUpdate({ _id: blogId }, blogData, {
        new: true,
    });
    return result;
});
exports.BlogServices = {
    createBlogIntoDB,
    getAllBlog,
    getSingleBlogFromDB,
    deleteBlogFromDB,
    updateBlogFromDB,
};
