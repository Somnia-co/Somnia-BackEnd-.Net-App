const express = require('express');
const router = express.Router();
const Database = require('../database/database.js');
const db = new Database();

router.get('/',(req,res) => {
    res.status(200).send("it's router for testing");
});

module.exports = router;