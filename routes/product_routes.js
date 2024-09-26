const routes = require('express').Router();

const productController = require('../controller/product_controller')

routes.post('/addproduct', productController.addProduct);

module.exports = routes;