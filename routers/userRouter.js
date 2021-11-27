const express = require("express");
const router = express.Router();
const Database = require("../database/database.js");

const db = new Database();

router.get("/", function (req, res) {
  db.AddUser();
});
router.get("/", function (req, res) {
  db.AddUser({
    _name: "John",
    _password: "dasa",
    _email: "dsa",
    _newsLetter: true,
    _shipAdd: "dsadas",
    _billAdd: "dsaddas"
  });
  res.status(200).send("hello");
});

module.exports = router;
