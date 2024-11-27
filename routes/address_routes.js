const routes = require('express').Router();

const addressController = require('../controller/address_controller')

routes.post('/addaddress', addressController.addAddress);

routes.get('/getaddress', addressController.getAddress);

routes.post('/deleteaddress', addressController.deleteAddress);

routes.post('/updateaddress', addressController.updateAddress);


module.exports = routes;