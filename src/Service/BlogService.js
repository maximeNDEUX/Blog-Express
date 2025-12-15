const BlogModel = require("../Model/BlogModel");

class BlogService {
    constructor(model) {
        this.model = model;
    }

    async getAllBlogs() {
        return this.model.findAll();
    }

    async getBlogById(id) {
        return this.model.findById(id);
    }
}

module.exports = new BlogService(BlogModel);
