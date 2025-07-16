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
router.get("/:blogId", blog_controller_1.BlogControllers.getSingleBlog);
router.delete("/:id", blog_controller_1.BlogControllers.deleteBlog);
router.patch("/update/:id", blog_controller_1.BlogControllers.updateBlog);
exports.blogRoutes = router;
