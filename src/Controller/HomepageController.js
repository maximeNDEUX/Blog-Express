/**
 * Affiche la page d'accueil
 *
 * @param {*} req
 * @param {*} res
 */
exports.index = (req, res) => {
    const fruits = ["Pomme", "Banane", "Orange", "Mangue"];

    res.render("pages/homepage/index", {
        // /templates/homepage.html
        title: `Accueil`,
        message: `Bienvenue sur la page d'accueil !`,
        fruits: fruits,
    });
};
