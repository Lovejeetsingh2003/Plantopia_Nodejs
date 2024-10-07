const { model } = require('mongoose');
const recommendedModel = require('../model/recommended_model');

class recommendedService{ 

    static async addRecommended(product_id) {
        try {
            const addRecommended = new recommendedModel({ product_id });
            return await addRecommended.save();
        } catch (error) {
            throw error;
        }
    }

    static async updateRecommended(_id,product_id) {
        try {
            return await recommendedModel.updateOne({ _id,product_id});
            
        } catch (error) {
            throw error;
        }
    }

   static async deleteAllFromRecommended() {
        try {
            return await recommendedModel.deleteMany({});
            
        } catch (error) {
            throw error;
        }
    }

     static async getRecommended() {
        try {
            return await recommendedModel.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = recommendedService;