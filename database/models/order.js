const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderDate: Date,
    userID: Number,
    shippingAddress: String,
    billingAddress: String,
    listOfProduct: [String]
});

const Order = mongoose.model('Order',orderSchema);

module.exports = Order;