const express = require("express");
const router = express.Router();
const Database = require("../database/database.js");

const db = new Database();

router.post("/create", function (req, res){
  db.AddUser(req.body.nickname, req.body.password, req.body.email, false,"","");
  res.status(200).send('User added successfully');
})
router.put("/delete/:id", function (req, res) {
  db.GetUser('James','Bond');
  db.AddProduct("tee","Tee created in class romm",120.23,2141);
  res.status(200).send("hello");
});
router.get("/:id",function (req, res){
  let user = db.GetUser(req.params.id).then(function (){
    console.log(user);
    res.status(200).send(user);
  })
});
router.put("update/:id",function (req, res){
  this.db.update(req.params.id);
  res.status(200).send("User deleted successfully");
})

module.exports = router;
