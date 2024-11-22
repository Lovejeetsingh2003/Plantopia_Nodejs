const favouriteService = require('../service/favorites_service');

exports.addFavouriteProduct = async (req, res, next) => {
    try {
        const {product_id,is_favourites} = req.body;
        const successadd = await favouriteService.addFavouriteProduct(product_id,is_favourites);
        res.json({ status: true, success: "Favourite Product Successfully Added."});
    } catch (error) {
        throw error;
    }
}

exports.getFavouriteProduct = async (req, res, next) => {
    try {
        const list = await favouriteService.getFavouriteProduct();
       
        res.send({
            data: list,
            total: list.length
        });
    } catch (error) {
        console.error("Error fetching Favourite Products: ", error);
        res.status(500).json({ status: false, error: "Error fetching Favourite Products." });
    }
}


exports.deleteFavouriteProduct = async (req, res, next) => {
    try {
        const {_id} = req.body;
        const successdeleted = await favouriteService.deleteFavouriteProduct(_id);
        res.json({ status: true, success: "Favourite Product Successfully Deleted."});
    } catch (error) {
        throw error;
    }
}