const routes = require('express').Router();
const model = require('../model/product_model');

const productController = require('../controller/product_controller')

routes.post('/addproduct', productController.addProduct);

routes.post('/deleteproduct', productController.deleteProduct);

routes.post('/updateproduct', productController.updateProduct);

routes.get('/getproduct', productController.getProducts);

routes.post('/getproductbyid', productController.getProductById);


module.exports = routes;