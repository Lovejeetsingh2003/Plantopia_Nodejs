const productService = require('../service/product_service');


exports.addProduct = async (req, res, next) => {
    try {
        const { product_first_name, product_last_name,product_desc,product_price,product_type,product_pic,is_instock} = req.body;
       
        const successadd= await productService.addProduct(product_first_name, product_last_name,product_desc,product_price,product_type,product_pic,is_instock);

        res.json({ status: true, success: "Product Successfully Added." });
    } catch (error) {
        throw error;
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.body;
        const successdel = await productService.deleteProduct(id);
        res.json({ status: true, success: "Product Successfully Deleted." });
    } catch (error) {
        throw error;
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        const { _id ,product_first_name, product_last_name,product_desc,product_price,product_type,product_pic,is_instock} = req.body;
        const successdel = await productService.updateProduct(_id,product_first_name, product_last_name,product_desc,product_price,product_type,product_pic,is_instock);
        res.json({ status: true, success: "Product Successfully Updated." });
    } catch (error) {
        throw error;
    }
}

exports.getProducts = async (req, res, next) => {
    try {
        const products = await productService.getProducts();
       
        res.send({
            data: products,
            total: products.length
        });
    } catch (error) {
        console.error("Error fetching products: ", error);
        res.status(500).json({ status: false, error: "Error fetching products." });
    }
}

exports.getProductById = async (req, res, next) => {
    try {
        var { id } = req.body; 
        const product = await productService.getProductById(id); 
        
        if (!product) {
            return res.status(404).json({ status: false, error: "Product not found." });
        }
       
        res.send({
            data: product,  
            total: product.length        
        });
    } catch (error) {
        console.error("Error fetching product: ", error);
        res.status(500).json({ status: false, error: "Error fetching product." });
    }
};




