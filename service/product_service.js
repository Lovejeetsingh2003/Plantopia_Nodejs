const productModel = require('../model/product_model');

class productService{ 
    static async addProduct(product_name,product_desc,product_price,product_type,is_toppick,is_instock) {
        try {
            const addproduct = new productModel({ product_name,product_desc,product_price,product_type,is_toppick,is_instock });
            return await addproduct.save();
        
    } catch (error) {
        throw error;
    }
    }

    static async deleteProduct(product_name) {
         try {
            return  await productModel.deleteOne({product_name});
        
    } catch (error) {
        throw error;
    }
    }
    
   
}

module.exports = productService;