const mongoose = require('mongoose');
const db = require('../config/db');


const { Schema } = mongoose;

const cartSchema = new Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'product model'
    },
    quantity: { type: Number, required: true, },    
},{timestamps : true})



const cartModel = db.model('cart model', cartSchema);
module.exports = cartModel;