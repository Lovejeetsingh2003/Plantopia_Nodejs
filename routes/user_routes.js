const routes = require('express').Router();
const registerController = require('../controller/user_controller');

routes.post('/registeration', registerController.register);

routes.post('/login', registerController.login);

module.exports = routes;