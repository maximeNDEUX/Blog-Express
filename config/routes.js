const express = require("express");
const router = express.Router();

// Controllers
const BlogControllerClass = require("../src/Controller/BlogController");
const HomeControllerClass = require("../src/Controller/HomeController");

// Wrapper pour gérer les erreurs async
const asyncHandler = require("../src/utils/asyncHandler");

// Crée des instances des controllers
const blogController = new BlogControllerClass(
    require("../src/Service/BlogService")
);
// const homeController = new HomeControllerClass();

// Routes
// router.get("/", asyncHandler(homeController.index));
router.get("/blogs", asyncHandler(blogController.index));
router.get("/blog/:id", asyncHandler(blogController.show));

// Middleware 404
router.use((req, res) => {
    res.status(404).render("errors/err_404");
});

module.exports = router;
