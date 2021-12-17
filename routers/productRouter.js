const express = require('express');
const router = express.Router();
const Product = require('../database/models/products');
const Auth = require('../services/Auth');

router.get('/:name',async (req,res) => {
    const products = await Product.find();
    res.status(200).json(products);
});

router.get('/',async (req,res) => {
    if(Auth.isLogged() == false) res.status(400).json('Access denied');
    else {
        try{
            const products = await Product.find();
            res.status(200).json(products);
        }catch(err){
            res.status(500).json({"message":err.message});
        }
    }
  
});
router.delete('/:id',async (req, res) => {
    if(Auth.isLogged() == false) res.status(400).json('Access denied');
    else{
        try{
        const products = await Product.findById(req.params.id);
        res.status(200).json({"message":"user with id: "+req.params.id+" deleted"});
    }
    catch(err){
        res.status(500).json({"message": err.message});
    }
    }
    
});
router.put('/update',async (req, res) => {
    if(Auth.isLogged() == false) res.status(400).json('Access denied');
    else{
        try{
        const product = await Product.findById(req.body.id);
        product.name = req.body.name;
        product.description = req.body.description;
        res.status(200).json({"message":"user with id: "+ req.body.id+" updated"});
    }
    catch{
        res.tatus(500).json({"message":"User with id: "+ req.body.id+" not updated/error occured"});
    }
    }
    
});

router.post('/Create',async(req, res) => {
    if(Auth.isLogged() == false) res.status(400).json('Access denied');
    else {
        try{
        const product = new Product()
        product.name = req.body.name;
        product.description = req.body.description;
        product.picture = req.body.picture;
        await Product.create(product);
        res.status(200).json({"message":"product created"});
    }
    catch{
        res.status(500).json({"message":"Error when creating product occurred"});
    }
    }
    
});

module.exports = router;