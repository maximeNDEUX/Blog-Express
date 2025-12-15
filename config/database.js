const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Récupérer le chemin depuis l'environnement
const dbPath = process.env.DB_PATH || "./blogs.db";

// Résolution du chemin absolu
const resolvedPath = path.resolve(dbPath);

const db = new sqlite3.Database(resolvedPath, (err) => {
    if (err) {
        console.error("Erreur connexion SQLite :", err.message);
    }
});

module.exports = db;
