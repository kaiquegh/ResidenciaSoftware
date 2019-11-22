const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');


routes.get('/products', ProductController.index);

routes.delete('/products/:id',ProductController.destroy);

routes.put('/products/:id',ProductController.update);

routes.get('/products/:id',ProductController.show); 

routes.post('/products', ProductController.store);

module.exports = routes;
