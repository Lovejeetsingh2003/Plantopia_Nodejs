const routes = require('express').Router();

const productController = require('../controller/product_controller')

routes.post('/addproduct', productController.addProduct);

routes.post('/deleteproduct', productController.deleteProduct);


module.exports = routes;