const { model } = require('mongoose');
const orderHistoryModel = require('../model/order_history_model');

class orderHistoryService{ 

    static async addOrderHistory(user_id,product_id,quantity,price) {
        try {
            const addOrderHistory = new orderHistoryModel({user_id,product_id,quantity,price });
            return await addOrderHistory.save();
        } catch (error) {
            throw error;
        }
    }

     static async getOrderHistory() {
        try {
            return await orderHistoryModel.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = orderHistoryService;