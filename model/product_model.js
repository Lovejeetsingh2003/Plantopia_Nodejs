const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const productSchema = new Schema({
    product_name: {
        type: String,
        unique: true, 
        required: true,
    },
    product_pic: {
        type: String,
        required: true, 
        unique: true,
    },
    product_desc: {
        type: String,
        required: true,
    },
    product_price: {
        type: Number,
        required: true,
    },
    product_type: {
        type: String,
        required: true,
    },
    is_instock: {
        type: Number,
        required: true,
    }
}, { timestamps: true });


const productModel = db.model('product models', productSchema); 

module.exports = productModel;

