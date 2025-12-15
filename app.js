require("dotenv").config();
const express = require("express");
const path = require("path");
const config = require("./config/config");

const { NotFoundError } = require("./src/errors/ApiError");
const errorHandler = require("./src/errors/errorHandler");
const logger = require("./src/middleware/logger");

const app = express();

// Logger
app.use(logger);

// Views (OK pour le rendu HTML normal)
app.set("views", path.join(__dirname, config.views));
app.set("view engine", config.viewEngine);
app.engine("html", require("ejs").__express);

// Static
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./config/routes"));

// 404 API (APRÈS les routes)
app.use((req, res, next) => {
    next(new NotFoundError(`Route ${req.originalUrl} introuvable`));
});

// Middleware global d'erreur (TOUJOURS DERNIER)
app.use(errorHandler);

module.exports = app;
