const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/HomeController');
const contatoController = require('./src/controllers/contatoController');

// function meuMiddleware(req, res, next) {
//   req.session = {nome: 'Luiz', sobrenome: 'Miranda'};
//   console.log();  
//   console.log('passei no seu middleware');  
//   console.log();  
//   next();
// }

// rotas da home
// route.get('/', meuMiddleware, homeController.paginaInicial, function (req, res, next) {
//     console.log();
//     console.log('ainda estou aqui');
//     console.log(`'ultimo middleware' olha o que tem na req.session.nome ${req.session.nome}`);
// });

route.get('/', homeController.paginaInicial);

route.post('/', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;