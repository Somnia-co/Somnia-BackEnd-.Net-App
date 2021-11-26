const express = require('express');
const router = express.Router();
const Database = require('../database/database.js');

const db = new Database();

// db.AddUser('John','Smith');



router.get('/', function(req, res){

    res.status(200).send('hello');
});

module.exports = router;