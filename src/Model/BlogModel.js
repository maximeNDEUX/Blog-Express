const db = require("../../config/database");

/**
 * Récupère tous les blogs
 */
exports.findAll = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM blogs ORDER BY id DESC", [], (err, rows) =>
            err ? reject(err) : resolve(rows)
        );
    });
};

/**
 * Récupère un blog par ID
 */
exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM blogs WHERE id = ?", [id], (err, row) =>
            err ? reject(err) : resolve(row)
        );
    });
};

/**
 * Récupère tous les blogs
 */
exports.findAll = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM blogs ORDER BY id DESC", [], (err, rows) =>
            err ? reject(err) : resolve(rows)
        );
    });
};

/**
 * Récupère un blog par ID
 */
exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM blogs WHERE id = ?", [id], (err, row) =>
            err ? reject(err) : resolve(row)
        );
    });
};
