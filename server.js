require("dotenv").config();
const express = require("express");
const path = require("path");
const config = require("./config/config");

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour logger les requêtes
const logger = require("./src/middleware/logger");
app.use(logger);

// Configuration du moteur de templates
app.set("views", path.join(__dirname, config.views));
app.set("view engine", config.viewEngine);
app.engine("html", require("ejs").__express);

// Middleware pour les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./config/routes"));

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
