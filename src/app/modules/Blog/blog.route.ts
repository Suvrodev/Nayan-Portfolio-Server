import express from "express";

import auth from "../../middleware/auth";
import { BlogControllers } from "./blog.controller";

const router = express.Router();

//will call controller function
router.post("/", BlogControllers.createBlog);
router.get("/", BlogControllers.getAllBlog);
router.get("/:blogTitle", BlogControllers.getSingleBlog);
router.delete("/:id", BlogControllers.deleteBlog);
router.patch("/update/:id", BlogControllers.updateBlog);

export const blogRoutes = router;
