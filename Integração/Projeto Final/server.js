const express = require("express");
const path = require('path');
const requireDir = require('require-dir');
const pug = require('pug');
const app = express();
const bodyParser = require('body-parser');
const db = require('./src/database/db');
var cors = require('cors');



//Carregando todos os modelos
requireDir('./src/models');

//Carregando o pug e definindo alguns caminhos
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/src/public/views')));
app.use('/imagens' , express.static(path.join(__dirname, 'src/public/img')));
app.use('/js' , express.static(path.join(__dirname, 'src/public/js')));
app.use('/css' , express.static(path.join(__dirname, 'src/public/css')));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


//Caminho das paginas
//HOME
app.get('/', (req,res)=>{
    res.render('home');
});
    //DELICIAS
app.get('/delicias', (req,res)=>{
    res.render('delicias');
});
    //CADASTRO
app.get('/cadastro', (req,res)=>{
    res.render('cadastro');
});
//Produtos
app.get('/produtos', (req,res)=>{
    res.render('produtos');
});

app.get('/corte', (req,res)=>{
    res.render('boloCorte');
});
app.get('/cupcakes', (req,res)=>{
    res.render('cupcakes');
});
app.get('/docinho', (req,res)=>{
    res.render('docinhos');
});
app.get('/beijinho', (req,res)=>{
    res.render('beijinho');
});
app.get('/brigadeiro', (req,res)=>{
    res.render('brigadeiro');
});
app.get('/churros', (req,res)=>{
    res.render('churros');
});
app.get('/danette', (req,res)=>{
    res.render('danette');
});
app.get('/limao', (req,res)=>{
    res.render('limao');
});
app.get('/limaoBrigadeiro', (req,res)=>{
    res.render('limaoBrigadeiro');
});
app.get('/maracuja', (req,res)=>{
    res.render('maracuja');
});
app.get('/pacoca', (req,res)=>{
    res.render('pacacoa');
});
app.get('/pacocaBrigadeiro', (req,res)=>{
    res.render('pacocaBrigadeiro');
});
app.get('/prestigio', (req,res)=>{
    res.render('prestigio');
});
app.get('/abacaxiCoco', (req,res)=>{
    res.render('abacaxiCoco');
});
app.get('/banana', (req,res)=>{
    res.render('banana');
});
app.get('/floresta', (req,res)=>{
    res.render('floresta');
});
app.get('/maracujaChantilly', (req,res)=>{
    res.render('maracujaChantilly');
});
app.get('/morangoNutella', (req,res)=>{
    res.render('morangoNutella');
});
app.get('/ninhoMorango', (req,res)=>{
    res.render('ninhoMorango');
});
app.get('/ninhoNutella', (req,res)=>{
    res.render('ninhoNutella');
});
app.get('/nutellaMMs', (req,res)=>{
    res.render('nutellaMMs');
});
app.get('/oreo', (req,res)=>{
    res.render('oreo');
});
app.get('/ovomaltine', (req,res)=>{
    res.render('ovomaltine');
});


//app.post('/assinado', (req, res)=>{
  //  res.send("email:" +req.body.email);
//});


//Usando as rotas
app.use('/api', require('./src/routes'));

//

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/BancoNane', { useNewUrlParser: true }, (err) => {
//   if (!err) {
//     console.log('MongoDB connected');
//   } else {
//     console.log('error: ' + err);
//   }
// });

//CONEXÃO SERVIDOR 
app.listen(3000, () =>{
    var dtNow = new Date;
    console.log('================================================');
    console.log("Servidor CONECTADO. Acesse hhtp://localhost:80");
    console.log("Servidor RODANDO a: " + dtNow.getHours() + ":" + dtNow.getMinutes() + ":" + dtNow.getSeconds());
    console.log('================================================');
});