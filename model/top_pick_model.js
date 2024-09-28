const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const topPickSchema = new Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'product model'
    },   
},{timestamps : true})



const topPickModel = db.model('Top Picks model', topPickSchema);
module.exports = topPickModel;