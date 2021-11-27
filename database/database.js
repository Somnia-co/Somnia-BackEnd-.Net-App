const User = require("./models/user.js");
const Order = require("./models/order.js");
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

  Init() {}
  GetProduct(id) {
    this.mongoose.connect(this.mongoDB);
  }

  async AddUser(_name, _password, _email, _newsLetter, _shipAdd, _billAdd) {
    let date = new Date();
    //we have to hash password here
    const newUser = new User({
      username: _name,
      pwHash: _password,
      email: _email,
      newsletter: _newsLetter,
      defShippingAddr: _shipAdd,
      defBillingAddress: _billAdd,
      regDate: date
    });
    console.log(newUser);
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
