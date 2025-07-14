import express from "express";

import auth from "../../middleware/auth";
import { BlogControllers } from "./blog.controller";

const router = express.Router();

//will call controller function
router.post("/", BlogControllers.createBlog);
router.get("/", BlogControllers.getAllBlog);
router.get("/admin", BlogControllers.getAllBlogByAdmin);
router.get("/instructor/:email", BlogControllers.getAllBlogByInstructor);
router.get("/:id", BlogControllers.getSingleBlog);
router.delete("/:id", BlogControllers.deleteBlog);
router.patch("/update/:id", BlogControllers.updateBlog);
router.put("/update/pin/:id", BlogControllers.updateBlogPin);
router.put("/update/isEnable/:id", BlogControllers.updateBlogIsEnable);

export const blogRoutes = router;
