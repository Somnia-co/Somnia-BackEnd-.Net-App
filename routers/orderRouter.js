const express = require('express');
const router = express.Router();
const Order = require('../database/models/order');


router.get('/', async function(req, res){
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }
    catch(err){
        res.status(500).json({"message": "server error, coulnd't get orders" + err.message});
    }
});

router.get('/:id',async (req, res) => {
    try{
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    }
    catch(err){
        res.status(500).json({"message": "server error, coulnd"+err.message});
    }
})
router.delete('/',async (req, res) => {
    try{
        await Order.deleteOne(req.body.id);
        res.status(200).json("Order deleted successfully");
    }
    catch(err){
        res.status(500).json({"message" : "Order not deleted/unknown error"});
    }
})

module.exports = router;
