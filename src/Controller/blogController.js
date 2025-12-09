const BlogModel = require("../Model/BlogModel");

/**
 * Affiche la page d'accueil
 *
 * @param {*} req
 * @param {*} res
 */
exports.index = async (req, res) => {
    // TODO: Fetch ici les blogs

    let blogs = await BlogModel.findAll();
    console.log(blogs);

    res.render("pages/blog/index", {
        title: `Accueil`,
        message: `Bienvenue sur la page d'accueil !`,
        blogs: blogs,
    });
};
