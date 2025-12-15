class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }

    index = async (req, res) => {
        const blogs = await this.blogService.getAllBlogs();
        res.render("pages/blog/index", { title: "Blogs", blogs });
    };

    show = async (req, res) => {
        const blog = await this.blogService.getBlogById(req.params.id);
        if (!blog) return res.status(404).render("errors/err_404");
        res.render("pages/blog/show", { blog });
    };
}

module.exports = BlogController;
