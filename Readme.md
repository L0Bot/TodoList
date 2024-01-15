# TodoList
Projet personnel d'une Liste de tâches à effectuer.

### Organisation du dépot

Pour des raisons de practicité pour ce parcours, le dépot contient les 2 projets nécessaires : 
- un dossier `front` qui contient le HTML/CSS/JS front. Il faut ouvrir le fichier `index.html` de ce dossier dans un navigateur (LiveServer).
- un dossier `back` qui contient l'API qui fournira au front les données nécessaires. Voir la section suivante pour démarrer l'API.

### API

#### Initialisation de la base

Créer un utilisateur `blabla` qui a pour mot de passe `blabla` et une base `blabla`.

Puis, nous allons créer les tables et importer un jeu de données d'exemple. Le fichier SQL est dans `back/data/table.sql`.

#### Configuration de l'environnement

Pour permettre à notre projet de se connecter à la base de données, nous allons créer un fichier `.env`. Un fichier d'exemple est disponible.

#### Démarrer l'API

Pour démarrer l'API : 

Se déplacer dans le dossier back
`cd back`

Installer les dépendances.

Puis démarrer le serveur Node.js
`npm start`