const { model } = require('mongoose');
const cartModel = require('../model/cart_model');

class cartService{ 

    static async addProductToCart(product_id,quantity,price) {
        try {
            const addProductToCart = new cartModel({ product_id,quantity,price });
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

     static async getFromCart() {
        try {
            return await cartModel.find();
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