const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); // Desacoplando o módulo de rotas do express em uma nova variável (routes)

//CRIAR UMA ROTA PARA LISTAR TODAS AS ONGS DO BANCO DE DADOS

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

    //CAMPOS QUE DEVERÃO SER  OBRIGATORIAMENTEPREENCHIDOS PELO USUÁRIO, 
    //SEM DAR CHANCE AO MESMO DE CRIAR NOVOS CAMPO

module.exports = routes; //Exportar variável para dentro do index
