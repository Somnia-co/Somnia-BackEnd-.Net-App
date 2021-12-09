const express = require('express');
const router = express.Router();
const Product = require('../database/models/products');

router.get('/:name',async (req,res) => {
    const products = await Product.find();
    res.status(200).json(products);
})

router.get('/',async (req,res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({"message":err.message});
    }
});

module.exports = router;