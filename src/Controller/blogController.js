const BlogService = require("../Service/BlogService");

/**
 * Liste des blogs
 */
exports.index = async (req, res) => {
    const blogs = await BlogService.getAllBlogs();

    res.render("pages/blog/index", {
        title: "Blogs",
        blogs,
    });
};

/**
 * Affichage d’un blog
 */
exports.show = async (req, res) => {
    const blog = await BlogService.getBlogById(req.params.id);

    if (!blog) {
        return res.status(404).render("errors/err_404");
    }

    res.render("pages/blog/show", {
        blog,
    });
};
