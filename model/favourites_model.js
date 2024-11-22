const mongoose = require('mongoose');
const db = require('../config/db');


const { Schema } = mongoose;

const favouriteSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user model'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'product model'
    },
    is_favourite: {
      type: Boolean,
        required: false,  
    },
},{timestamps : true})



const favouriteModel = db.model('favourite model', favouriteSchema);
module.exports = favouriteModel;