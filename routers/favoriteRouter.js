const express = require('express');
const router = express.Router();
const Favorite = require('../database/models/favorites');

router.get('/:userID',async(req, res) => {
    try{
        const favorites = await Favorite.find({userID: req.params.userID});
        res.status(200).json(favorites);
    }
    catch(err){
        res.status(500).json(err.message);
    }
});

router.get('/:orderID',async(req, res) => {
    try{
        const favorite = await Favorite.findById(req.params.orderID);
        res.status(200).json(favorite);
    }
    catch(err){
        res.status(500).json(err.message);
    }
});

// router.delete('/',async(req.res) => {

// })

module.exports = router;