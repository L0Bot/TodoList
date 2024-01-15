
require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = process.env.PORT;

// On autorise tout le monde sur notre API
app.use(cors())
// On demande à Express d'extraire les données des requêtes POST
app.use(express.urlencoded({ extended: true }));

// On demande à Express d'extraire les données des requêtes POST formattées en multipart
const mutipartParser = multer();
// on utlise .none() pour dire qu'on attends pas de fichier, uniquement des inputs "classiques" !
app.use(mutipartParser.none() );

app.use(router);

app.listen(port, () => {
  console.log(`API demarrée sur http://localhost:${port}`);
});
