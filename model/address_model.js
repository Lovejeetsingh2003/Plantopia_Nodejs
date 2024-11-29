const mongoose = require('mongoose');
const db = require('../config/db');


const { Schema } = mongoose;

const addressSchema = new Schema({
    user_id: {
         type: mongoose.Schema.Types.ObjectId,
        ref : 'user model'
    },
     username: {
        type: String,
         required: true,
        unique : false,
    },
    phone_no: {
        type: String,
         required: true,
        unique : false,
    },
    alternate_phone_no: {
       type: String,
       required: false,
       unique : false,
    }, 
     pincode: {
       type: String,
       required: true,
       unique : false,
    }, 
     state: {
       type: String,
       required: true,
       unique : false,
    }, 
      city: {
       type: String,
       required: true,
       unique : false,
    }, 
       house_no: {
       type: String,
       required: true,
       unique : false,
    }, 
        area: {
       type: String,
       required: true,
       unique : false,
    }, 
         nearby_landmark: {
       type: String,
       required: false,
       unique : false,
    }, 
          address_type: {
       type: String,
       required: true,
       unique : false,
    }, 
},{timestamps : true})



const addressModel = db.model('address model', addressSchema);
module.exports = addressModel;