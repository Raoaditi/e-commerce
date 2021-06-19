const Product = require("../models/Product");

const getProducts = (req, res, err) => {
    if(err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
    else {
        const products = Product.find({});
        res.json(products);
    }
}

const getProductById = (req, res, err) => {
    if(err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
    else {
        const product = Product.findById(req.params.id);
        res.json(product);
    }
}

module.exports = {
    getProducts, 
    getProductById
}