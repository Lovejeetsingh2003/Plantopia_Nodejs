const { model } = require('mongoose');
const addressModel = require('../model/address_model');

class addressService{ 

    static async addAddress(username,phone_no,alternate_phone_no,pincode,state,city,house_no,area,nearby_landmark,address_type) {
        try {
            const addAddress = new addressModel({ username,phone_no,alternate_phone_no,pincode,state,city,house_no,area,nearby_landmark,address_type });
            return await addAddress.save();
        } catch (error) {
            throw error;
        }
    }

    static async updateAddress(_id,username,phone_no,alternate_phone_no,pincode,state,city,house_no,area,nearby_landmark,address_type) {
        try {
            return await addressModel.updateOne({_id,username,phone_no,alternate_phone_no,pincode,state,city,house_no,area,nearby_landmark,address_type});
            
        } catch (error) {
            throw error;
        }
    }

     static async getAddress() {
        try {
            return await addressModel.find();
        } catch (error) {
            throw error;
        }
    }

    static async deleteAddress(_id) {
        try {
            return await addressModel.deleteOne({ _id});
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = addressService;