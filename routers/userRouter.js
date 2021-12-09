const express = require("express");
const router = express.Router();
const User = require("../database/models/user");

router.post("/create",async (req, res) => {
  const user = new User({
    username: req.body.username,
    pwHash: req.body.pwHash,
    email: req.body.email
  })

  try{
    const newUser = await user.save();
    //status 201 for successful create
    res.status(201).json(newUser);
  }
  catch(err){
    res.status(500).json({message: err.message});
  }
})
router.delete("/delete/:id", async (req, res) => {
  try{
    const user = await User.findById(req.params.id);
    if(user == null) return res.status(404).json({"message": "Cannot find user"});
    await user.remove();
    res.status(200).json({"message": "User deleted"});
  }
  catch(err){
    res.status(500).json({message: err.message});
  }
});

router.get("/:id",async (req, res) => {
  try{
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).json({message: err.message});
  }
});

router.put("/update/:id",async (req, res) => {
  try{
    const user = await User.findById(req.params.id);
    user.email = req.body.email;
    user.username = req.body.username;
    const editedUser = await user.save();
    res.json(editedUser);
  }
  catch(err){
    res.status(500).json({message: err.message});
  }
})

router.get("/",async(req, res) => {
  try{
    const users = await User.find();
    res.json(users);
  }
  catch(err){
    res.status(500).json({message: err.message});
  }
})

module.exports = router;
