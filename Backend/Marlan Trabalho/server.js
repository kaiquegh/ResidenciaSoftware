const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./src/routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));//Trata os dados recebidos
app.use(bodyParser.json());//Traduz pra json

requireDir('./src/models');
//Acessando as rotas
app.use('/api', require('./src/routes'));

app.listen(3001, ()=>{
    console.log("Servidor CONECTADO ");
});