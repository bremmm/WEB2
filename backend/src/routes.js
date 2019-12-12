const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

// const SpotController = require('./controllers/SpotController');

const InscricaoController = require('./controllers/InscricaoController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/inscricao', InscricaoController.salvar);

// routes.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = routes;