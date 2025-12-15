// Middleware pour logger les requêtes
module.exports = (req, res, next) => {
    const start = Date.now(); // timestamp de départ

    // Quand la réponse est terminée
    res.on("finish", () => {
        const duration = Date.now() - start;

        console.log(
            `[${req.method}] ${req.originalUrl} - ${res.statusCode} - ${duration} ms`
        );
    });

    next(); // passer au middleware suivant
};
