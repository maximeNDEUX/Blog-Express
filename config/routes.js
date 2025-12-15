const express = require("express");
const router = express.Router();

const BlogController = require("../src/Controller/BlogController");
const BlogService = require("../src/Service/BlogService");

const blogController = new BlogController(new BlogService());

// Routes
router.get("/blogs", blogController.index);
router.get("/blog/:id", blogController.show);

module.exports = router;
