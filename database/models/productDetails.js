const mongoose = require("mongoose");

const prodDetailSchema = mongoose.Schema({
  productID: Number,
  productCode: Number,
  stock: Number,
  Pictures: [String],
  Price: Number,
  colorHEX: String,
});

const Detail = mongoose.model('Detail',prodDetailSchema);

module.exports = Detail;