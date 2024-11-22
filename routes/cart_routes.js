const routes = require('express').Router();

const cartController = require('../controller/cart_controller')

routes.post('/addtocart', cartController.addToCart);

routes.get('/getcartproducts', cartController.getFromCart);

routes.post('/deletefromcart',cartController.deleteFromCart );

routes.post('/updatecart',cartController.updateCart );


module.exports = routes;