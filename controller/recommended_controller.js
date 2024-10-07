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

exports.deleteAllFromRecommended = async (req, res, next) => {
    try {
        const successdeleted = await recommendedService.deleteAllFromRecommended();
        res.json({ status: true, success: "Product Successfully Deleted From Recommended List."});
    } catch (error) {
        throw error;
    }
}

exports.getRecommended = async (req, res, next) => {
    try {
        const list = await recommendedService.getRecommended();
       
        res.send({
            data: list,
            total: list.length
        });
    } catch (error) {
        console.error("Error fetching Recommended list: ", error);
        res.status(500).json({ status: false, error: "Error fetching products Recommended list." });
    }
}