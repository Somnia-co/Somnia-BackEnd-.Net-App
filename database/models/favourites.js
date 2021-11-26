const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema({
    userID: Number,
    productCode: Number,
    dateAdded: Date
})

const Favorite = mongoose.model('Favorite',favoritesSchema);

module.exports = Favorite;