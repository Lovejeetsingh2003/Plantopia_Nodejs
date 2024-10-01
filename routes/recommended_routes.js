const routes = require('express').Router();

const recommendedController = require('../controller/recommended_controller')

routes.post('/addrecommended',recommendedController.addRecommended);

routes.post('/updaterecommended',recommendedController.updateRecommended);

routes.post('/deleterecommended',recommendedController.deleteRecommended);


module.exports = routes;