const productModel = require('../model/product_model');

class productService{ 
    static async addProduct(product_name,product_desc,product_price,product_type,is_toppick,is_instock,timestamp) {
        try {

            const addproduct = new productModel({ product_name,product_desc,product_price,product_type,is_toppick,is_instock,timestamp });
            return await addproduct.save();
        
    } catch (error) {
        throw error;
    }
    }

    static async deleteProduct(_id) {
         try {
            return  await productModel.deleteOne({_id});
        
    } catch (error) {
        throw error;
    }
    }
    
   static async updateProduct(_id, product_name,product_desc,product_price,product_type,is_toppick,is_instock) {
         try {
            return  await productModel.updateOne({_id, product_name,product_desc,product_price,product_type,is_toppick,is_instock});
        
    } catch (error) {
        throw error;
    }
    }

}

module.exports = productService;