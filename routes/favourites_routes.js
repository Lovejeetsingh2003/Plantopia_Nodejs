const routes = require('express').Router();

const favouriteController = require('../controller/favourite_controller')

routes.post('/addfavouriteproduct', favouriteController.addFavouriteProduct);

routes.get('/getfavouriteproduct', favouriteController.getFavouriteProduct);

routes.post('/deletefavouriteproduct',favouriteController.deleteFavouriteProduct );



module.exports = routes;