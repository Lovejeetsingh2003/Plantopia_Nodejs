const routes = require('express').Router();
const registerController = require('../controller/user_controller');

routes.post('/registeration', registerController.register);

routes.post('/login', registerController.login);

routes.post('/forgot', registerController.forgot);


module.exports = routes;