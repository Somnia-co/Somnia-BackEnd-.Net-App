const http = require('http');
const express = require('express');
const port = 8080;
const app = express();
const productRouter = require('./routers/productRouter.js');
const userRouter = require('./routers/userRouter.js')

app.get('/',(req,res) =>{
    res.status(200).send('hello world');
})


//specify which router to use
app.use('/products', productRouter);
app.use('/users', userRouter);

app.listen(port, ()=>{console.log('server started, listening at: '+port);});