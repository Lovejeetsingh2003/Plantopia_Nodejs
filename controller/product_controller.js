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

exports.deleteProduct = async (req, res, next) => {
    try {
        const { _id } = req.body;
        const successdel = await productService.deleteProduct(_id);
        res.json({ status: true, success: "Product Successfully Deleted." });
    } catch (error) {
        throw error;
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        const { _id ,product_name,product_desc,product_price,product_type,is_toppick,is_instock} = req.body;
        const successdel = await productService.updateProduct(_id,product_name,product_desc,product_price,product_type,is_toppick,is_instock);
        res.json({ status: true, success: "Product Successfully Updated." });
    } catch (error) {
        throw error;
    }
}

