const BlogModel = require("../Model/BlogModel");
const { NotFoundError, ValidationError } = require("../errors/ApiError");

class BlogService {
    async getAllBlogs() {
        return BlogModel.findAll();
    }

    async getBlogById(id) {
        if (!id) {
            throw new ValidationError("L'id est obligatoire");
        }

        const blog = await BlogModel.findById(id);

        if (!blog) {
            throw new NotFoundError(`Blog avec l'id ${id} introuvable`);
        }

        return blog;
    }
}

module.exports = BlogService;
