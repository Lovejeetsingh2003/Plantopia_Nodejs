const { model } = require('mongoose');
const favouriteModel = require('../model/favourites_model');

class favouriteService{ 

    static async addFavouriteProduct(product_id,is_favourite) {
        try {
            const addProductToCart = new favouriteModel({ product_id,is_favourite });
            return await addProductToCart.save();
        } catch (error) {
            throw error;
        }
    }

     static async getFavouriteProduct() {
        try {
            return await favouriteModel.find();
        } catch (error) {
            throw error;
        }
    }

    static async deleteFavouriteProduct(_id) {
        try {
            return await favouriteModel.deleteOne({ _id});
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = favouriteService;