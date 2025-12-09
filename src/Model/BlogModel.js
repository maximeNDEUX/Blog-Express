// BlogModel.js
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Connexion à la base (relative au fichier)
const db = new sqlite3.Database("./blogs.db", (err) => {
    if (err) console.error("Erreur connexion DB :", err.message);
    else console.log("Connexion SQLite établie.");
});
/**
 * Récupère tous les blogs
 * @returns {Promise<Array>} Liste des blogs
 */
exports.findAll = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM blogs ORDER BY id DESC";
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error("Erreur findAll :", err.message);
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

/**
 * Récupérer un blog par son ID
 * @param {number} id
 * @returns {Promise<Object>} Article trouvé
 */
exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM blogs WHERE id = ?";
        db.get(sql, [id], (err, row) => {
            if (err) {
                console.error("Erreur findById :", err.message);
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
};
