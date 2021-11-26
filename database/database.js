const User = require("./models/user.js");
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

  async AddUser(_name, _surname) {

    const newUser = new User({ name: _name, surname: _surname });
    this.mongoose
      .connect(this.mongoDB)
      .then(() => {
        console.log("DB connected");
        newUser.save();
      })
      .catch((err) => console.log(err));

  }

  async GetUser(_name, _surname) {
    const user = await User.find({ name: _name, surname: _surname});
    return user;
  }
}

module.exports = Database;
