const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    name: String,
    description: String,
    category: String,
    productCode: Number
});

const Product = mongoose.model('Product', productsSchema);

module.exports = Product;