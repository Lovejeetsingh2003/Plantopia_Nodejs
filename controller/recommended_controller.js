const recommendedService  = require('../service/recommended_service');

exports.addRecommended = async (req, res, next) => {
    try {
        const {product_id} = req.body;
        const successadd = await recommendedService.addRecommended(product_id);
        res.json({ status: true, success: "Product Successfully Added To Recommended List."});
    } catch (error) {
        throw error;
    }
}

exports.updateRecommended = async (req, res, next) => {
    try {
        const {_id,product_id} = req.body;
        const successupdated = await recommendedService.updateRecommended(_id,product_id);
        res.json({ status: true, success: "Product Successfully Updated in Recommended List."});
    } catch (error) {
        throw error;
    }
}

exports.deleteRecommended = async (req, res, next) => {
    try {
        const {_id} = req.body;
        const successdeleted = await recommendedService.deleteRecommended(_id);
        res.json({ status: true, success: "Product Successfully Deleted From Recommended List."});
    } catch (error) {
        throw error;
    }
}