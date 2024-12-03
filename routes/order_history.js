const routes = require('express').Router();

const orderHistoryController = require('../controller/order_history_controlletr')

routes.post('/addorderhistory', orderHistoryController.addOrderHistory);

routes.get('/getorderhistory',orderHistoryController.getOrderHistory);



module.exports = routes;