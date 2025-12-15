// seeder.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./blogs.db");

// Exemple de données de blog plus complets
const blogs = [
    {
        title: "Premier article",
        content: `Ceci est le texte du premier article de mon mini blog. 
        Nous allons expliquer comment démarrer un projet Express et créer une base de données SQLite simple. 
        L'objectif est de fournir une structure de départ pour vos applications web.`,
    },
    {
        title: "Deuxième article",
        content: `Voici le deuxième article, un peu plus long pour tester le stockage. 
        Il aborde les bonnes pratiques pour organiser vos routes Express et séparer la logique métier de l'affichage.`,
    },
    {
        title: "Tips pour Express",
        content: `Quelques conseils pour créer un blog simple avec Express et SQLite : 
        - Utiliser des routes claires et RESTful 
        - Fermer toujours vos connexions à la base de données 
        - Séparer le code de seed et le code de serveur pour éviter les conflits`,
    },
    {
        title: "Gestion des erreurs",
        content: `La gestion des erreurs est cruciale. 
        Vous devez toujours vérifier que la base est ouverte, capturer les exceptions et loguer les erreurs pour faciliter le debug.`,
    },
    {
        title: "Sécurité et validation",
        content: `Pour éviter les injections SQL, utilisez des requêtes préparées. 
        Validez toujours les entrées utilisateurs avant de les insérer dans la base de données. 
        Cela rend votre application beaucoup plus sécurisée.`,
    },
    {
        title: "Structurer vos fichiers",
        content: `Il est conseillé de créer un dossier pour vos routes, un autre pour vos modèles, et un dossier séparé pour vos seeders. 
        Cela rend votre projet beaucoup plus lisible et maintenable.`,
    },
    {
        title: "Insertion de données massives",
        content: `Lorsque vous avez beaucoup de données à insérer dans SQLite, utilisez les requêtes préparées et transactionnelles. 
        Cela améliore les performances et réduit le risque de corruption de la base.`,
    },
    {
        title: "Lecture et affichage",
        content: `Pour lire les articles, utilisez db.all ou db.each selon vos besoins. 
        Ensuite, vous pouvez les rendre dans vos vues avec un moteur comme EJS ou directement via JSON pour une API.`,
    },
    {
        title: "Pagination",
        content: `Si votre blog devient volumineux, pensez à mettre en place une pagination. 
        SQLite supporte LIMIT et OFFSET qui sont très utiles pour afficher les articles page par page.`,
    },
    {
        title: "Optimisations futures",
        content: `Plus tard, vous pourrez migrer vers une base plus robuste (PostgreSQL ou MySQL) si nécessaire, 
        ajouter un moteur de templating avancé ou mettre en place une API REST complète. 
        L'idée est de commencer simple et de faire évoluer votre application progressivement.`,
    },
];

// Création de la table si elle n'existe pas
db.serialize(() => {
    db.run(
        `
    CREATE TABLE IF NOT EXISTS blogs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL
    )
  `,
        (err) => {
            if (err) {
                console.error(
                    "Erreur lors de la création de la table :",
                    err.message
                );
                return;
            }
            console.log("Table 'blogs' prête.");

            // Vider la table avant d'insérer les données
            db.run("DELETE FROM blogs", (err) => {
                if (err) {
                    console.error(
                        "Erreur lors de la suppression des anciens articles :",
                        err.message
                    );
                    return;
                }
                console.log("Table 'blogs' vidée.");

                // Insertion des données
                const stmt = db.prepare(
                    "INSERT INTO blogs (title, content) VALUES (?, ?)"
                );
                blogs.forEach((blog) => {
                    stmt.run(blog.title, blog.content);
                });
                stmt.finalize();

                console.log("Nouveaux articles insérés !");
            });
        }
    );
});

// Fermer la base après un petit délai pour s'assurer que tout est exécuté
setTimeout(() => {
    db.close();
    console.log("Base de données fermée.");
}, 500);
