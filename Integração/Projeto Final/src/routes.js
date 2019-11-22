const express = require('express');
const controllerClientes = require('./controllers/clientesController');
const controllerProdutos = require('./controllers/produtosController');
const controllerPedidos = require('./controllers/pedidosController');
var router = express.Router();

//Rotas Cliente
router.post('/clientes/criar', controllerClientes.insert);
router.delete('/clientes/delete/:id', controllerClientes.delete);
router.put('/clientes/update/:id', controllerClientes.update);
router.get('/clientes/exibir', controllerClientes.show);


//Rotas Produtos
router.post('/produtos/criar', controllerProdutos.insert);
router.delete('/produtos/delete/:id', controllerProdutos.delete);
router.put('/produtos/update/:id', controllerProdutos.update);
router.get('/produtos/exibir', controllerProdutos.show);
router.get('/produtos/', controllerProdutos.index);

//Rotas Pedidos
router.post('/pedidos/criar', controllerPedidos.insert);
router.delete('/pedidos/delete/:id', controllerPedidos.delete);
router.put('/pedidos/update/:id', controllerPedidos.update);
router.get('/pedidos/exibir', controllerPedidos.show);



module.exports = router;