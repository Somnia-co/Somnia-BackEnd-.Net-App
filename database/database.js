const User = require("./models/user.js");
const Product = require("./models/products.js");
const Order = require("./models/order.js");
const Detail = require("./models/productDetails.js");
const Favorite = require("./models/favourites.js");
const config = require("../config/config.js");

//this will be class for database class
class Database {
  constructor() {
    try {
      this.mongoose = require("mongoose");
    } catch (e) {
      console.log(e);
    }

    this.mongoDB = config.db;
  }

  Test() {
    this.AddUser('John','Smith','example@gmail.com',true,'Almeria, UAL',"Almeria, UAL, Dean's office");
    this.AddProduct('tee','some nice tshirt',12.22, 1021);
    this.AddOrder(21312,'Ual, Aleria','Ual, Almeria, deans office',["product1","product2"]);
    this.AddProductDetail(21312,321312,12,['dsadas','dasa'],12.21,'HEXCOLOR');
    this.AddFavouriteProduct(21,312)
  }
  GetProduct(id) {
    this.mongoose.connect(this.mongoDB);
  }

  async AddFavouriteProduct(_userID, _productCode){
    let _date = new Date();
    let newfavoriteProduct = new Favorite({
      userID: _userID,
      productCode: _productCode,
      dateAdded: _date 
    });
    this.mongoose
    .connect(this.mongoDB)
    .then(() => {
      console.log("DB connected");
      newFavoriteProduct.save(function(err, user) {
        console.log("User saved");
      });
    })
    .catch((err) => console.log(err));
  }
  async AddProductDetail(_productID, _productCode,_stock,_Pictures,_Price,_colorHEX){
    let newDetail = new Detail({
      productID: _productID,
      productCode: _productCode,
      stock: _Stock,
      Pictures: _Pictures,
      Price: _Price,
      colorHEX: _ColorHEX
    });
    this.mongoose
    .connect(this.mongoDB)
    .then(() => {
      console.log("DB connected");
      newDetail.save(function(err, user) {
        console.log("User saved");
      });
    })
    .catch((err) => console.log(err));
  }
  async AddOrder(_userID, _shipAdd, _billAdd, _prodList){
    let _date = new Date();
    let newOrder = new Order({orderDate: _date, userID: _userID, shipAdd: _shipAdd, billAdd: _billAdd, productList: _prodList});
    this.mongoose
    .connect(this.mongoDB)
    .then(() => {
      console.log("DB connected");
      newOrder.save(function(err, user) {
        console.log("User saved");
      });
    })
    .catch((err) => console.log(err));
  }
  async AddProduct(_name, _description, _price, _prodCode){
    let newProduct = new Product({name: _name, description: _description, price: _price, prod});
    this.mongoose
      .connect(this.mongoDB)
      .then(() => {
        console.log("DB connected");
        newProduct.save(function(err, user) {
          console.log("User saved");
        });
      })
      .catch((err) => console.log(err));
  }
  async AddUser(_name, _password, _email, _newsLetter, _shipAdd, _billAdd) {
    let date = new Date();
    //we have to hash password here
    let newUser = new User({
      username: _name,
      pwHash: _password,
      email: _email,
      newsletter: _newsLetter,
      defShippingAddr: _shipAdd,
      defBillingAddress: _billAdd,
      regDate: date
    });
    this.mongoose
      .connect(this.mongoDB)
      .then(() => {
        console.log("DB connected");
        newUser.save(function(err, user) {
          console.log("User saved");
        });
      })
      .catch((err) => console.log(err));
  }

  GetUser(_name, _surname) {
    this.mongoose
      .connect(this.mongoDB)
      .then(() => {
        console.log("DB connected Get User");
        User.find({ name: _name, surname: _surname }, function (err, user) {
          if (err) console.log(err);
          return user;
        });
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Database;
