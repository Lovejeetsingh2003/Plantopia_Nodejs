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

exports.deleteAllFromTopPick = async (req, res, next) => {
    try {
        const successdeleted = await topPickService.deleteAllTopPicks();
        res.json({ status: true, success: "Product Successfully Deleted From Top Picks List."});
    } catch (error) {
        throw error;
    }
}

exports.getTopPicks = async (req, res, next) => {
    try {
        const list = await topPickService.getTopPicks();
       
        res.send({
            data: list,
            total: list.length
        });
    } catch (error) {
        console.error("Error fetching top pick list: ", error);
        res.status(500).json({ status: false, error: "Error fetching products top pick list." });
    }
}