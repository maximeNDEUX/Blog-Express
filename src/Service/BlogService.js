const BlogModel = require("../Model/BlogModel");

/**
 * Récupérer tous les blogs
 */
exports.getAllBlogs = async () => {
    const blogs = await BlogModel.findAll();

    // Exemple de logique métier possible
    return blogs;
};

/**
 * Récupérer un blog par ID
 */
exports.getBlogById = async (id) => {
    // Règle métier minimale
    if (!id || isNaN(id)) {
        return null;
    }

    const blog = await BlogModel.findById(id);

    if (!blog) {
        return null;
    }

    return blog;
};
