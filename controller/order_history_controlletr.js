const orderHistoryService = require('../service/order_history_service');

exports.addOrderHistory = async (req, res, next) => {
    try {
        const {user_id,product_id,quantity,price} = req.body;
        const successadd = await orderHistoryService.addOrderHistory(user_id,product_id,quantity,price);
        res.json({ status: true, success: "Successfully Added To order History."});
    } catch (error) {
        throw error;
    }
}

exports.getOrderHistory = async (req, res, next) => {
    try {
        const list = await orderHistoryService.getOrderHistory();
       
        res.send({
            data: list,
            total: list.length
        });
    } catch (error) {
        console.error("Error fetching order history: ", error);
        res.status(500).json({ status: false, error: "Error fetching order history." });
    }
}
