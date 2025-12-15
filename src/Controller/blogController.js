const asyncHandler = require("../utils/asyncHandler");

class BlogController {
    constructor(blogService) {
        this.blogService = blogService;

        // Wrapping centralisé
        this.index = asyncHandler(this.index.bind(this));
        this.show = asyncHandler(this.show.bind(this));
    }

    async index(req, res) {
        const blogs = await this.blogService.getAllBlogs();

        res.render("pages/blog/index", {
            title: "Blogs",
            blogs,
        });
    }

    async show(req, res) {
        const blog = await this.blogService.getBlogById(req.params.id);

        res.render("pages/blog/show", { blog });
    }
}

module.exports = BlogController;
