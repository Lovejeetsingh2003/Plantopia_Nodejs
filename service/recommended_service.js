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

    static async deleteRecommended(_id) {
        try {
            return await recommendedModel.deleteOne({
                _id
            });
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = recommendedService;