const BlogModel = require("../Model/BlogModel");

/**
 * Affiche la liste des blogs
 *
 * @param {*} req
 * @param {*} res
 */
exports.index = async (req, res) => {
    let blogs = await BlogModel.findAll();

    res.render("pages/blog/index", {
        title: `Accueil`,
        message: `Bienvenue sur la page d'accueil !`,
        blogs: blogs,
    });
};

/**
 * Lire un blog spécifique
 *
 * @param {*} req
 * @param {*} res
 */
exports.show = async (req, res) => {
    const blogId = req.params.id;
    const blog = await BlogModel.findById(blogId);

    res.render("pages/blog/show", {
        blog: blog,
    });
};
