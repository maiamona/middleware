const express = require('express');//'express' esta dentro da pasta node_modules
const app = express();
const routes = require('./routes');
const path = require('path');
// const meuMiddleware = require('./src/middlewares/middleware');
const {middlewareGlobal} = require('./src/middlewares/middleware');

/**
 * DRUD => CREATE(POST, criar), READ(GET, ler), UPDATE(PUT, atualizar), DELETE(DELETE, apagar)
 * 
 * req => requisição, res => resposta
 * 
 * http://meusite.com/ <- GET -> entregue a pagina/
 * http://meusite.com/sobre <- GET -> entregue a pagina/sobre
 */

app.use(express.urlencoded({extended: true}));//para tratar o 'body' das requisições 

// app.use(express.static('./public'));//caminho relativo
app.use(express.static(path.resolve(__dirname, 'public')));//caminho absoluto

app.set('views', path.resolve(__dirname, 'src', 'views'));//caminho absoluto
// app.set('views', './src/views');//caminho relativo
app.set('view engine', 'ejs');

// nossos proprios middlewares
// app.use(meuMiddleware);
app.use(middlewareGlobal);

app.use(routes);

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
    console.log('Acessar http://localhost:3000');
});