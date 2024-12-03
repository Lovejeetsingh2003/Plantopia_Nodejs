const mongoose = require('mongoose');
const db = require('../config/db');


const { Schema } = mongoose;

const orderHistorySchema = new Schema({
    user_id: {
         type: mongoose.Schema.Types.ObjectId,
        ref : 'user model'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'product model'
    },
    price : {type : Number,required: true,},
    quantity: { type: Number, required: true, },    
},{timestamps : true})



const orderHistoryModel = db.model('order history model', orderHistorySchema);
module.exports = orderHistoryModel;