const { model } = require('mongoose');
const cartModel = require('../model/cart_model');

class cartService{ 

    static async addProductToCart(product_id,quantity) {
        try {
            const addProductToCart = new cartModel({ product_id,quantity });
            return await addProductToCart.save();
        } catch (error) {
            throw error;
        }
    }

    static async updateCart(_id,quantity) {
        try {
            return await cartModel.updateOne({ _id,quantity});
            
        } catch (error) {
            throw error;
        }
    }

    static async deleteFromCart(_id) {
        try {
            return await cartModel.deleteOne({ _id});
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = cartService;