const addressService = require('../service/address_service');

exports.addAddress = async (req, res, next) => {
    try {
        const {username,phone_no,alternate_phone_no,pincode,state,city,house_no,area,nearby_landmark,address_type} = req.body;
        const successadd = await addressService.addAddress(username,phone_no,alternate_phone_no,pincode,state,city,house_no,area,nearby_landmark,address_type);
        res.json({ status: true, success: "Address Successfully Added."});
    } catch (error) {
        throw error;
    }
}

exports.getAddress = async (req, res, next) => {
    try {
        const list = await addressService.getAddress();
       
        res.send({
            data: list,
            total: list.length
        });
    } catch (error) {
        console.error("Error fetching Address: ", error);
        res.status(500).json({ status: false, error: "Error fetching Address." });
    }
}

exports.updateAddress = async (req, res, next) => {
    try {
        const {_id,username,phone_no,alternate_phone_no,pincode,state,city,house_no,area,nearby_landmark,address_type} = req.body;
        const successupdated = await addressService.updateAddress(_id,username,phone_no,alternate_phone_no,pincode,state,city,house_no,area,nearby_landmark,address_type);
        res.json({ status: true, success: "Updated Address Successfully."});
    } catch (error) {
        throw error;
    }
}

exports.deleteAddress = async (req, res, next) => {
    try {
        const {_id} = req.body;
        const successdeleted = await addressService.deleteAddress(_id);
        res.json({ status: true, success: "Address Successfully Deleted"});
    } catch (error) {
        throw error;
    }
}