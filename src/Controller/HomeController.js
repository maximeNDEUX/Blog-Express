/**
 * Affiche la liste des blogs
 *
 * @param {*} req
 * @param {*} res
 */
exports.index = async (req, res) => {
    res.render("pages/home/index", {
        title: `Accueil`,
        message: `Bienvenue sur la page d'accueil !`,
    });
};
