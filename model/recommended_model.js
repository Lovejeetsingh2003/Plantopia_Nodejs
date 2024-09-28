const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const recommendedSchema = new Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'product model'
    },   
},{timestamps : true})



const recommendedModel = db.model('Recommended model', recommendedSchema);
module.exports = recommendedModel;