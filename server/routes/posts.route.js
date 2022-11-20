const {
  createPost,
  deletePost,
  getPosts,
  getSinglePost,
  updatePost,
}= require("../controllers/posts.controller");

const express = require("express");

const router = express.Router();

// GET, POST, DELETE, PUT, PATCH

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
