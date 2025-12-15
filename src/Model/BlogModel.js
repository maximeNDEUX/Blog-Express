const db = require("../../config/database");

class BlogModel {
    constructor(database) {
        this.db = database; // permet l’injection pour les tests
    }

    /**
     * Récupère tous les blogs
     * @returns {Promise<Array>}
     */
    findAll() {
        return new Promise((resolve, reject) => {
            this.db.all(
                "SELECT * FROM blogs ORDER BY id DESC",
                [],
                (err, rows) => (err ? reject(err) : resolve(rows))
            );
        });
    }

    /**
     * Récupère un blog par ID
     * @param {number} id
     * @returns {Promise<Object>}
     */
    findById(id) {
        return new Promise((resolve, reject) => {
            this.db.get("SELECT * FROM blogs WHERE id = ?", [id], (err, row) =>
                err ? reject(err) : resolve(row)
            );
        });
    }
}

// Export d’une instance par défaut
module.exports = new BlogModel(db);
