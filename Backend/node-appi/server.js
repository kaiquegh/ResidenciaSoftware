const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require('require-dir');
const app = express();


app.use(express.json());
app.use(cors());

//Conectando banco
mongoose.connect('mongodb://localhost:27017/nodeapi',{ useUnifiedTopology:true, useNewUrlParser: true
});


requireDir('./src/models');

//Redirecionando ao arquivo rotas onde estaram as rotas
app.use('/api', require('./src/routes'));
//Conectando ao servidor
app.listen(3001);