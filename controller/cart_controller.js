const cartService = require('../service/cart_service');

exports.addToCart = async (req, res, next) => {
    try {
        const {product_id,quantity,price} = req.body;
        const successadd = await cartService.addProductToCart(product_id,quantity,price);
        res.json({ status: true, success: "Product Successfully Added To Cart."});
    } catch (error) {
        throw error;
    }
}

exports.getFromCart = async (req, res, next) => {
    try {
        const list = await cartService.getFromCart();
       
        res.send({
            data: list,
            total: list.length
        });
    } catch (error) {
        console.error("Error fetching Cart Products: ", error);
        res.status(500).json({ status: false, error: "Error fetching Cart Products." });
    }
}

exports.updateCart = async (req, res, next) => {
    try {
        const {_id,quantity} = req.body;
        const successupdated = await cartService.updateCart(_id,quantity);
        res.json({ status: true, success: "Product Successfully Updated in Cart."});
    } catch (error) {
        throw error;
    }
}

exports.deleteFromCart = async (req, res, next) => {
    try {
        const {_id} = req.body;
        const successdeleted = await cartService.deleteFromCart(_id);
        res.json({ status: true, success: "Product Successfully Deleted From Cart."});
    } catch (error) {
        throw error;
    }
}