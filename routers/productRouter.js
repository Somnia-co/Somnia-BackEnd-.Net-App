const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).send("it's router for testing");
})

module.exports = router;