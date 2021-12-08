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

  async ReadRecord(type, query){

    let _record;
    await type.find(query,(err, record) => {
      if(err) console.log('Error finding record of type:'+type);
      else _record = record;
    }).clone().catch(err => console.log(err));
    return _record;
  }
  async DeleteRecord(type,query){
    this.mongoose
    .connect(this.mongoDB)
    .then(() => {
      console.log("DB connected");
      type.delete(function(err, user) {
        if(err) console.log('Error when saving'+record);
        else console.log('Success saving'+record);
      })
    })
    .catch((err) => console.log(err));
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

  async GetUser(id) {
    let ObjectId = this.mongoose.Types.ObjectId;
    let query = {_id: new ObjectId(id)}
    let user = await User.find({username:"John"}).then(function(){
      console.log(user);
      return user;
    })

    // await this.ReadRecord(User,query).then((user) => {
    //   console.log(user);
    //   return user;
    // });
  }
  DeleteUser(_id) {
    this.DeleteRecord(User,_id).then(() => console.log("record deleted"));}
  UpdateUser(_id){

  }
  GetProduct(_name){
    this.ReadRecord(Product,{}).then((product) => {
      console.log(product);
      return product;
    })
  }
}

module.exports = Database;
