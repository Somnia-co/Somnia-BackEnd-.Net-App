require('dotenv').config();
const express = require('express');
const session = require('express-session');
const port = 8080;
const app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());
let passport = require('passport');
let bodyParser = require('body-parser');
let LocalStrategy = require("passport-local");
let passportLocalMongoose =require("passport-local-mongoose");
const productRouter = require('./routers/productRouter.js');
const userRouter = require('./routers/userRouter.js');
const orderRouter = require('./routers/orderRouter.js');
const favoritesRouter = require('./routers/favoriteRouter.js');
const mongoose = require('mongoose');
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(session({name: "SessionID",secret: "123"}))

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error',(error) => console.log(error));
db.once('open',() => console.log('Connected to database')); 

//routes that we use
app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/favorites',favoritesRouter);
app.use('/orders', orderRouter);

app.listen(port, ()=>{console.log('server started, listening at: '+port);});