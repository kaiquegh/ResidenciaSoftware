const express = require('express');
const routes = express.Router();
const alunoController = require('./controllers/alunoController');

routes.post('/alunos/inserir',alunoController.insert);

routes.get('/alunos/exibir',alunoController.show);

routes.get('/alunos/delete',alunoController.delete);

module.exports = routes;

