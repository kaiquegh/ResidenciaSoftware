const express = require('express');
const Router = express.Router();
const PostController = require('./controllers/PostController');
const UserController = require('./controllers/UserController');

const routes = Router();
//Rotas User
routes.get('/list/users', UserController.index);
routes.get('/users/:id', UserControler.show);
routes.post('/register/user', UserController.store);
routes.put('/update/user/:id', UserController.update);
routes.delete('/delete/user/:id', UserController.destroy);


//Rotas Post
routes.get('/list/posts', PostController.index);
routes.get('/list/posts/:id', PostController.show);
routes.post('/register/post', PostController.store);
routes.put('/update/post/:id', PostController.update);
routes.delete('/delete/post/:id', PostController.destroy);

module.exports = routes;
