// Importe le router d'Express
const express = require("express");
const router = express.Router();

// Import des contrôleurs
// --

const BlogController = require("../src/Controller/BlogController");

// Définition des routes
// --

// Route pour la page d'accueil
router.get("/blogs", BlogController.index);

// // Route pour la page "Liste des blogs"
// router.get("/blogs", BlogController.index);

// // Route pour la page "Nouveaux blogs"
// router.get("/blog/new", BlogController.create);

// Route pour afficher un blog d'id spécifié
router.get("/blog/:id", BlogController.show);

// // TODO: Routes DELETE et EDIT

// Routes pour les blogs
// --

// Syntaxe alternative des routes pour les blogs
//
// /blogs                // Liste des blogs
// /blog                 // Crée un nouveau blog
// /blog/:id            // Affiche un blog spécifique
// /blog/:id/edit       // Modifie un blog existant
// /blog/:id/delete     // Supprime un blog

// // Route pour afficher la liste des blogs
// router.get('/pokemons', PokemonController.index);

// // Route pour créer un nouveau blog
// router.get('/pokemon/new', PokemonController.create);
// router.post('/pokemon/new', PokemonController.create);

// // Route pour afficher un Pokémon spécifique
// router.get('/pokemon/:id', PokemonController.show);

// // Route pour mettre à jour un Pokémon existant
// router.get('/pokemon/:id/edit', PokemonController.update);
// router.post('/pokemon/:id/edit', PokemonController.update);

// // Route pour supprimer un Pokémon
// router.get('/pokemon/:id/delete', PokemonController.delete);
// router.post('/pokemon/:id/delete', PokemonController.delete);

router.use((req, res) => {
    res.status(404).render("errors/err_404");
});

module.exports = router;
