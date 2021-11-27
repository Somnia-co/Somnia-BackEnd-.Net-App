const express = require("express");
const router = express.Router();
const Database = require("../database/database.js");

const db = new Database();

router.get("/", function (req, res) {
  db.AddUser();
});
router.get("/", function (req, res) {
  db.Test();
  res.status(200).send("hello");
});

module.exports = router;
