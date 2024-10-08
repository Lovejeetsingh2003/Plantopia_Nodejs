const productModel = require('../model/product_model');

class productService{ 
    static async addProduct(product_first_name, product_last_name,product_desc,product_price,product_type,product_pic,is_instock) {
        try {

            const addproduct = new productModel({ product_first_name, product_last_name,product_desc,product_price,product_type,product_pic,is_instock });
            return await addproduct.save();
        
    } catch (error) {
        throw error;
    }
    }

    static async deleteProduct(id) {
        try {
            
            return  await productModel.findByIdAndDelete(id);
        
    } catch (error) {
        throw error;
    }
    }
    
   static async updateProduct(_id, product_first_name, product_last_name,product_desc,product_price,product_type,product_pic,is_instock) {
         try {
            return  await productModel.updateOne({_id, product_first_name, product_last_name,product_desc,product_price,product_type,product_pic,is_instock});
        
    } catch (error) {
        throw error;
    }
    }

    static async getProducts() {
        try {
            return await productModel.find();
        } catch (error) {
            throw error;
        }
    }

  static async getProductById(id) {
    try {
        return await productModel.find({ _id : id });
    } catch (error) {
        throw error;
    }
}
}

module.exports = productService;