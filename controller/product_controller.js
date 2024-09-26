const productService = require('../service/product_service');


exports.addProduct = async (req, res, next) => {
    try {
        const { product_name,product_desc,product_price,product_type,is_toppick,is_instock} = req.body;

        const successadd= await productService.addProduct(product_name,product_desc,product_price,product_type,is_toppick,is_instock);

        res.json({ status: true, success: "Product Successfully Added." });
    } catch (error) {
        throw error;
    }
}