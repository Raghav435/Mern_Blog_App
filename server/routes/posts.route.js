import express from "express";
import {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.controller";

const router = express.Router();


// GET, POST, DELETE, PUT, PATCH

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;