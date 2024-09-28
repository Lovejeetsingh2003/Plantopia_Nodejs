const topPickService  = require('../service/top_pick_service');

exports.addTopPick = async (req, res, next) => {
    try {
        const {product_id} = req.body;
        const successadd = await topPickService.addTopPicks(product_id);
        res.json({ status: true, success: "Product Successfully Added To Top Picks List."});
    } catch (error) {
        throw error;
    }
}

exports.updateTopPick = async (req, res, next) => {
    try {
        const {_id,product_id} = req.body;
        const successupdated = await topPickService.updateTopPicks(_id,product_id);
        res.json({ status: true, success: "Product Successfully Updated in Top Picks List."});
    } catch (error) {
        throw error;
    }
}

exports.deleteFromTopPick = async (req, res, next) => {
    try {
        const {_id} = req.body;
        const successdeleted = await topPickService.deleteTopPicks(_id);
        res.json({ status: true, success: "Product Successfully Deleted From Top Picks List."});
    } catch (error) {
        throw error;
    }
}