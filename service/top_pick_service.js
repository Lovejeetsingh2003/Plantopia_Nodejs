const { model } = require('mongoose');
const topPickModel = require('../model/top_pick_model');

class topPickService{ 

    static async addTopPicks(product_id) {
        try {
            const addTopPicks = new topPickModel({ product_id });
            return await addTopPicks.save();
        } catch (error) {
            throw error;
        }
    }

    static async updateTopPicks(_id,product_id) {
        try {
            return await topPickModel.updateOne({ _id,product_id});
            
        } catch (error) {
            throw error;
        }
    }

    static async deleteAllTopPicks() {
        try {
            return await topPickModel.deleteMany({});
            
        } catch (error) {
            throw error;
        }
    }

     static async getTopPicks() {
        try {
            return await topPickModel.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = topPickService;