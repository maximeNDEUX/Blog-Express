module.exports = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || "error";
    const message = err.message || "Internal Server Error";

    // Log complet pour debug côté serveur
    console.error(err.stack);

    // Réponse JSON propre
    res.status(statusCode).json({
        status,
        message,
    });
};
