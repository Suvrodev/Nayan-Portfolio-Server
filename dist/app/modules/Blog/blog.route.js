"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
//will call controller function
router.post("/", blog_controller_1.BlogControllers.createBlog);
router.get("/", blog_controller_1.BlogControllers.getAllBlog);
router.get("/admin", blog_controller_1.BlogControllers.getAllBlogByAdmin);
router.get("/instructor/:email", blog_controller_1.BlogControllers.getAllBlogByInstructor);
router.get("/:id", blog_controller_1.BlogControllers.getSingleBlog);
router.delete("/:id", blog_controller_1.BlogControllers.deleteBlog);
router.patch("/update/:id", blog_controller_1.BlogControllers.updateBlog);
router.put("/update/pin/:id", blog_controller_1.BlogControllers.updateBlogPin);
router.put("/update/isEnable/:id", blog_controller_1.BlogControllers.updateBlogIsEnable);
exports.blogRoutes = router;
