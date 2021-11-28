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

  async CreateRecord(record) {
    this.mongoose
    .connect(this.mongoDB)
    .then(() => {
      console.log("DB connected");
      record.save(function(err, user) {
        if(err) console.log('Error when saving'+record);
        else console.log('Success saving'+record);
      })
    })
    .catch((err) => console.log(err));
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
    let newFavoriteProduct = new Favorite({
      userID: _userID,
      productCode: _productCode,
      dateAdded: _date 
    });
    await this.CreateRecord(newFavoriteProduct);
  }
  async AddProductDetail(_productID, _productCode,_stock,_Pictures,_Price,_colorHEX){
    let newDetail = new Detail({
      productID: _productID,
      productCode: _productCode,
      stock: _stock,
      Pictures: _Pictures,
      Price: _Price,
      colorHEX: _colorHEX
    });
    await this.CreateRecord(newDetail);
  }
  async AddOrder(_userID, _shipAdd, _billAdd, _prodList){
    let _date = new Date();
    let newOrder = new Order({orderDate: _date, userID: _userID, shipAdd: _shipAdd, billAdd: _billAdd, productList: _prodList});
    await this.CreateRecord(newOrder);
  }
  async AddProduct(_name, _description, _price, _prodCode){
    let newProduct = new Product({name: _name, description: _description, price: _price, productCode:_prodCode});
    await this.CreateRecord(newProduct);
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
    this.CreateRecord(newUser);
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
